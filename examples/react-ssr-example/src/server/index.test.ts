import { configure } from "enzyme";
import ReactSixteenAdapter from "enzyme-adapter-react-16";
import "jest";
import { Helmet } from "react-helmet";
import request from "supertest";
import server from "./index";

configure({
    adapter: new ReactSixteenAdapter(),
});

jest.mock("axios");

describe("Server", () => {
    describe("index", () => {
        beforeEach(() => {
            Helmet.canUseDOM = false;
        });
        afterEach(() => {
            Helmet.canUseDOM = true;
        });
        it(`responds to "/v1/health" with 200 and render "OK"`, done => {
            request(server)
                .get("/v1/health")
                .expect(200)
                .end((err, res) => {
                    if (err) {
                        return done(err);
                    }
                    expect(res.text).toEqual("OK");
                    done();
                });
        });
        it(`responds to "/" with 200 and render <App /> for Home Page`, done => {
            request(server)
                .get("/")
                .expect(200)
                .end((err, res) => {
                    if (err) {
                        return done(err);
                    }
                    expect(res.text).toContain("<!DOCTYPE html>");
                    done();
                });
        });
        it(`responds to "/blog" with 200 and render <App /> for Blog Page`, done => {
            request(server)
                .get("/blog")
                .expect(200)
                .end((err, res) => {
                    if (err) {
                        return done(err);
                    }
                    expect(res.text).toContain("<!DOCTYPE html>");
                    done();
                });
        });
        it(`responds to "/failure" with 404 and render <App /> for NoMatch Page`, done => {
            request(server)
                .get("/failure")
                .expect(404)
                .end((err, res) => {
                    if (err) {
                        return done(err);
                    }
                    expect(res.text).toContain("<!DOCTYPE html>");
                    done();
                });
        });
    });
});