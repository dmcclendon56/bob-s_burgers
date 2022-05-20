# Description:

This app allows users to see a list of characters in the Bob’s Burger universe. Each character has a blurb of which episode they appeared in, who they were voiced by, and other fun facts.

- https://6286e5c1d7193f59cd2947f4--vermillion-eclair-47c7f6.netlify.app/

![Screen Shot 2022-05-20 at 8 14 14 AM](https://user-images.githubusercontent.com/101522627/169535594-2e1e9b6c-c2eb-446c-aac7-669d9f4e7943.png)

![Screen Shot 2022-05-15 at 9 31 42 AM](https://user-images.githubusercontent.com/101522627/169535641-060bbca3-ae54-4688-b5e8-4556925aaa91.png)


## Technologies Used:
- React
- React paginate
- Css
- HTML
- Bootstrap

### Getting Started
Fork and clone the repository
`npm install`


## Contribution Guidelines
Please leave comments/guidance on where and how to better The Bob's Burgers App. Any bugs you encountered, code that could use condensing and any other improvements.

### licensing
- API used - https://bobs-burgers-api-ui.herokuapp.com/
- ![Screen Shot 2022-05-20 at 8 08 45 AM](https://user-images.githubusercontent.com/101522627/169534954-c89c08aa-1150-4327-8cb5-f822a4a7d61a.png)

### Search Bar & Pagination
- https://www.youtube.com/watch?v=x7niho285qs
- https://github.com/machadop1407/React-Search-Bar


- https://www.npmjs.com/package/react-paginate
- https://www.youtube.com/watch?v=kMuRr53RjcE&t=1408s
  
  
```
 <ReactPaginate
          previousLabel={'<<'}
          nextLabel={'>>'}
          breakLabel={'...'}
          pageCount={85}
          marginPagesDisplayed={4}
          pageRangeDisplayed={2}
          onPageChange={handlePageClick}
          containerClassName={'pagination justify-content-center'}
          pageClassName={'page-item'}
          pageLinkClassName={'page-link'}
          previousClassName={'page-item'}
          previousLinkClassName={'page-link'}
          nextClassName={'page-item'}
          nextLinkClassName={'page-link'}
          breakClassName={'page-item'}
          breakLinkClassName={'page-link'}
          activeClassName={'active'}
          /> 
```
