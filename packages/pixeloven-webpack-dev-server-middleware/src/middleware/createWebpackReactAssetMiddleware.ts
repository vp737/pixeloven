import { logger } from "@pixeloven/node-logger";
import { Compiler } from "@pixeloven/webpack-compiler";
import { NextFunction, Request, Response } from "express";
import { flushChunkNames } from "react-universal-component/server";
import flushChunks from "webpack-flush-chunks";

/**
 * Applies react assets to server requests
 * @todo Add better logging for what assets were discovered
 * @param compiler
 */
async function webpackReactAssetMiddleware(compiler: Compiler) {
    if (compiler.client) {
        try {
            const clientStats = await compiler.onDone("client");
            const { scripts, stylesheets } = flushChunks(clientStats, {
                chunkNames: flushChunkNames(),
            });
            logger.info("Applying react assets to stream.");
            return (req: Request, res: Response, next: NextFunction) => {
                req.files = {
                    css: stylesheets,
                    js: scripts,
                };
                next();
            };
        } catch (err) {
            logger.error(err.message);
            return (req: Request, res: Response, next: NextFunction) => {
                next(err);
            };
        }
    }
    logger.warn(
        `Cannot find webpack compiler "client". Starting without client compiler`,
    );
    return (req: Request, res: Response, next: NextFunction) => {
        next();
    };
}

/**
 * Creates webpackHotMiddleware with custom configuration
 * @todo To support before and after hooks with a more unified config we should probably fork this middleware
 * @param compiler
 */
const createWebpackReactAssetMiddleware = (compiler: Compiler) => {
    return webpackReactAssetMiddleware(compiler);
};

export default createWebpackReactAssetMiddleware;
