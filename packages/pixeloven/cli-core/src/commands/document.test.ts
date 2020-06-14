import "jest";

import * as core from "@pixeloven-core/filesystem";
import { build, print, system } from "gluegun";
import { resolve } from "path";
import sinon from "sinon";

const cli = build().brand("pixeloven").src(resolve(__dirname, "..")).create();

const Sandbox = sinon.createSandbox();

const Stub = {
    core: {
        resolvePath: Sandbox.stub(core, "resolvePath"),
    },
    print: Sandbox.stub(print),
    process: {
        exit: Sandbox.stub(process, "exit"),
    },
    system: Sandbox.stub(system),
};

/**
 * @todo Find a way to mock the filesystem
 *      - These tests rely on mocking too much
 *      - Docker might help here
 */
describe("@pixeloven/cli", () => {
    describe("commands", () => {
        describe("document", () => {
            afterAll(() => {
                Sandbox.restore();
            });
            afterEach(() => {
                Sandbox.reset();
            });
            it("should print error", async () => {
                const context = await cli.run("document");
                expect(context.commandName).toEqual("document");
                expect(Stub.print.error.callCount).toEqual(1);
                expect(Stub.print.warning.calledOnce).toEqual(false);
                expect(Stub.process.exit.called).toEqual(true);
                expect(Stub.process.exit.calledWithExactly(1)).toEqual(true);
            });
            it("should warn if typedoc.json is missing and succeed", async () => {
                Stub.core.resolvePath
                    .withArgs("typedoc.json")
                    .returns("/some/abs/path/typedoc.json");
                Stub.core.resolvePath
                    .withArgs("tsconfig.json")
                    .returns("/some/abs/path/tsconfig.json");
                Stub.system.spawn.resolves({
                    status: 0,
                });
                const context = await cli.run("document ts");
                expect(context.commandName).toEqual("document");
                expect(Stub.system.spawn.calledOnce).toEqual(true);
                expect(Stub.print.success.callCount).toEqual(1);
                expect(Stub.process.exit.called).toEqual(true);
                expect(Stub.process.exit.calledWithExactly(0)).toEqual(true);
            });
            it("should warn if tsconfig.json is missing and succeed", async () => {
                Stub.core.resolvePath
                    .withArgs("typedoc.json")
                    .returns("/some/abs/path/typedoc.json");
                Stub.core.resolvePath
                    .withArgs("tsconfig.json")
                    .returns("/some/abs/path/tsconfig.json");
                Stub.system.spawn.resolves({
                    status: 0,
                });
                const context = await cli.run("document ts");
                expect(context.commandName).toEqual("document");
                expect(Stub.system.spawn.calledOnce).toEqual(true);
                expect(Stub.print.success.callCount).toEqual(1);
                expect(Stub.process.exit.called).toEqual(true);
                expect(Stub.process.exit.calledWithExactly(0)).toEqual(true);
            });
            it("should fail to document ts,tsx files", async () => {
                Stub.core.resolvePath
                    .withArgs("typedoc.json")
                    .returns("/some/abs/path/typedoc.json");
                Stub.core.resolvePath
                    .withArgs("tsconfig.json")
                    .returns("/some/abs/path/tsconfig.json");
                Stub.system.spawn.resolves({
                    status: 1,
                });
                const context = await cli.run("document tsx");
                expect(context.commandName).toEqual("document");
                expect(Stub.system.spawn.calledOnce).toEqual(true);
                expect(Stub.print.success.callCount).toEqual(0);
                expect(Stub.process.exit.called).toEqual(true);
                expect(Stub.process.exit.calledWithExactly(1)).toEqual(true);
            });
        });
    });
});