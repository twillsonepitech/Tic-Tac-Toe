declare module "*.png";

declare module "*.jpg" {
    const path: string;
    export default path;
}