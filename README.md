# Your Exercise
Provide a solution to our problem by allowing each component to define its own strings and lazy load them only when first rendered.

Make sure that:

1. Your solution is **scalable & reusable**.
2. When/If we add a language switch button in the future that the relevant component will re-render and display the newly selected language. 

##### For example
Under the directory "/components/detailsView/ResourcesHeader" we will have a "locales/en-US/strings.json" file that will include the following strings:

```json
{
  "TITLE": "My Resources",
  "SUBTITLE": "Resources List",
}
```

**Note:** Make sure you remove the prefix of the component name from the string keys.
meaning, **RESOURCES_HEADER_TITLE** turns into **TITLE**

# Solution Submission

The code should be placed in an open GitHub repository.
