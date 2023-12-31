export const iconPath = () => {
  return process.env.PUBLIC_URL + "/imgs/";
};

export const DefaultBooks = [
  {
    id: 0,
    title: "Book Title 1",
    author: "Author 1",
    price: 20.99,
    PDF: {
      fileName: "book-1.pdf",
      fileType: "application/pdf",
    },
    photo: "https://fakeimg.pl/300x300/?text=Book+Cover&font=lobster",
    version: "1.0",
    olderVersion: "0.9",
    edition: "First Edition",
    releaseDate: "2023-11-15",
    brief: "Brief description of Book 1",
    ISBN: "978-3-16-148410-0",
    category: "cat-1",
    pagesNum: "1000",
    hoursRead: "7h",
  },
  {
    id: 1,
    title: "Book Title 2",
    author: "Author 2",
    price: 15.49,
    PDF: {
      fileName: "book-1.pdf",
      fileType: "application/pdf",
    },
    photo: `https://via.placeholder.com/300.png/09f/fff`,
    version: "2.0",
    olderVersion: "1.0",
    edition: "Second Edition",
    releaseDate: "2023-12-05",
    brief: "Brief description of Book 2",
    ISBN: "978-3-16-148410-1",
    category: "cat-2",
    pagesNum: "1200",
    hoursRead: "120h",
  },
  {
    id: 2,
    title: "Book Title 3",
    author: "Author 3",
    price: 20.99,
    PDF: {
      fileName: "book-1.pdf",
      fileType: "application/pdf",
    },
    photo: "https://via.placeholder.com/300.png/09f/fff",
    version: "1.0",
    olderVersion: "1.0",
    edition: "First Edition",
    releaseDate: "2023-11-15",
    brief: "Brief description of Book 3",
    ISBN: "978-3-16-148410-3",
    category: "cat-3",
    pagesNum: "10",
    hoursRead: "50h",
  },
  {
    id: 3,
    title: "Book Title 33",
    author: "Author 33",
    price: 20.99,
    PDF: {
      fileName: "book-33.pdf",
      fileType: "application/pdf",
    },
    photo: "https://via.placeholder.com/300.png/09f/fff",
    version: "1.0",
    olderVersion: "0.9",
    edition: "First Edition",
    releaseDate: "2023-11-15",
    brief: "Brief description of Book 33",
    ISBN: "978-3-16-148410-3",
    category: "cat-3",
    pagesNum: "900",
    hoursRead: "5h",
  },
  {
    id: 4,
    title: "Book Title 4",
    author: "Author 4",
    price: 20.99,
    PDF: {
      fileName: "book-4.pdf",
      fileType: "application/pdf",
    },
    photo: "https://via.placeholder.com/300.png/09f/fff",
    version: "1.0",
    olderVersion: "0.9",
    edition: "First Edition",
    releaseDate: "2023-11-15",
    brief: "Brief description of Book 4",
    ISBN: "978-3-16-148410-4",
    category: "cat-3",
    pagesNum: "600",
    hoursRead: "10h",
  },
  {
    id: 5,
    title: "Book Title 5",
    author: "Author 5",
    price: 20.99,
    PDF: {
      fileName: "book-1.pdf",
      fileType: "application/pdf",
    },
    photo: "https://via.placeholder.com/300.png/09f/fff",
    version: "1.0",
    olderVersion: "0.9",
    edition: "First Edition",
    releaseDate: "2023-11-15",
    brief: "Brief description of Book 5",
    ISBN: "978-3-16-158510-5",
    category: "cat-3",
    pagesNum: "200",
    hoursRead: "20h",
  },
  {
    id: 6,
    title: "Book Title 6",
    author: "Author 6",
    price: 20.99,
    PDF: {
      fileName: "book-6.pdf",
      fileType: "application/pdf",
    },
    photo: "https://via.placeholder.com/300.png/09f/fff",
    version: "1.0",
    olderVersion: "0.9",
    edition: "First Edition",
    releaseDate: "2023-11-15",
    brief: "Brief description of Book 6",
    ISBN: "978-3-16-168610-6",
    category: "cat-1",
    pagesNum: "2100",
    hoursRead: "20h",
  },
  {
    id: 7,
    title: "Book Title 7",
    author: "Author 7",
    price: 20.99,
    PDF: {
      fileName: "book-7.pdf",
      fileType: "application/pdf",
    },
    photo: "https://via.placeholder.com/300.png/09f/fff",
    version: "1.0",
    olderVersion: "0.9",
    edition: "First Edition",
    releaseDate: "2023-11-15",
    brief: "Brief description of Book 7",
    ISBN: "978-3-17-178710-7",
    category: "cat-3",
    pagesNum: "200",
    hoursRead: "20h",
  },
  {
    id: 8,
    title: "Book Title 8",
    author: "Author 8",
    price: 20.99,
    PDF: {
      fileName: "book-8.pdf",
      fileType: "application/pdf",
    },
    photo: "https://fakeimg.pl/300x300/?text=Book+Cover&font=lobster",
    version: "1.0",
    olderVersion: "1.0",
    edition: "First Edition",
    releaseDate: "2028-11-15",
    brief: "Brief description of Book 8",
    ISBN: "978-8-16-148410-8",
    category: "cat-8",
    pagesNum: "190",
    hoursRead: "20h",
  },
  // Add more book objects as needed
];

export const categories = [
  {
    id: 1,
    name: "cat-1",
  },
  {
    id: 2,
    name: "cat-2",
  },
  {
    id: 3,
    name: "cat-3",
  },
  {
    id: 4,
    name: "cat-4",
  },
  {
    id: 5,
    name: "cat-8",
  },
];

export const olderVersions = [
  {
    id: 1,
    name: "1.0",
  },
  {
    id: 2,
    name: "0.9",
  },
  {
    id: 3,
    name: "1.4",
  },
];
