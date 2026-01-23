import eleventyNavigationPlugin from "@11ty/eleventy-navigation";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default async function (eleventyConfig)
{
	eleventyConfig.setInputDirectory("./src/");
	eleventyConfig.setOutputDirectory("./dist/");
	eleventyConfig.addPlugin(eleventyNavigationPlugin);
	//eleventyConfig.addPlugin(eleventyImageTransformPlugin);
	eleventyConfig.addWatchTarget("src/css/**/*.css");
	//eleventyConfig.addPassthroughCopy( { "css/index.css": "index.css"});
	eleventyConfig.addPassthroughCopy("src/images");

};

