jest.mock("node-appwrite", () => {
  return {
    Client: jest.fn().mockImplementation(() => ({
      setEndpoint: jest.fn().mockReturnThis(),
      setProject: jest.fn().mockReturnThis(),
      setKey: jest.fn().mockReturnThis(),
    })),
    Databases: jest.fn().mockImplementation(() => ({
      listDocuments: jest.fn(),
      getDocument: jest.fn(),
      deleteDocument: jest.fn(),
    })),
    Query: {
      equal: jest.fn((feild, value) => {
        feild, value;
      }),
    },
  };
});
