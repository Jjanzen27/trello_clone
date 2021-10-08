// createList and sendList should look something like this:

// const createList = (req, res, next) => {
//     const { title, boardId, position } = req.body;
//     List.create({
//       title: title || "New List",
//       position: position || 65535,
//       cards: [],
//       boardId: boardId,
//     }).then((list) => {
//       req.list = list;
//       next();
//     });
//   };

// const sendList = (req, res) => {
//     let list = req.list;
//     res.json({ list });
// };