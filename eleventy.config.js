import eleventyNavigationPlugin from "@11ty/eleventy-navigation";

export default async function (eleventyConfig)
{
	eleventyConfig.setInputDirectory("./src/");
	eleventyConfig.setOutputDirectory("./dist/");
	eleventyConfig.addPlugin(eleventyNavigationPlugin);
	eleventyConfig.addWatchTarget("css/**/*.css");
	eleventyConfig.addPassthroughCopy( { "css/index.css": "index.css"});

};

