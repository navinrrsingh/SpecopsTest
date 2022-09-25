export const BlogsPage = {
  getHeading: () => cy.get("h1"),
  getAllBlogEdit: () => cy.get("[id^=editBlog_]"),
  getAllBlogDelete: () => cy.get("[id^=deleteBlog_]"),

  getBlogEditAtIndex: (number) => cy.get("[id^=editBlog_]").eq(number),
  getBlogDeleteAtIndex: (number) => cy.get("[id^=deleteBlog_]").eq(number),

  getBlogHeadingAtIndex: (number) => cy.get("main>div>h3").eq(number),
  getBlogTextAtIndex: (number) =>
    cy
      .get("main>div")
      .eq(number)
      .within(() => {
        return cy.get("p").eq(1);
      }),
  getAddBlogLink: () => cy.get("a").contains("Add"),
};
