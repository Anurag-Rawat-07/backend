const asyncHandler = (requestHandler) => {
    // You must return the inner function so Express can actually run it
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
    };
};

export { asyncHandler }
// const asyncHandler = (requestHandler) => { ... }
// This is a "higher-order function." It takes your normal route handler 
// (like fetching a user from a database) as an argument and wraps it inside another function.

// return (req, res, next) => { ... }
// It returns a standard Express middleware function. Express needs req (request), res (response), 
// and next (the function to move to the next step) to operate.

// Promise.resolve(requestHandler(req, res, next))
// This executes your actual route code. By wrapping it in Promise.resolve(), it ensures that even 
// if your route isn't strictly asynchronous, it will be treated as a Promise.

// .catch((err) => next(err))
// If anything goes wrong in your route (e.g., the database is down, or a variable is undefined), 
// the Promise will "reject." The .catch grabs that error and passes it to next(err). 
// In Express, passing an error into next() immediately forwards it to your central error-handling middleware.


// const asyncHandler=()=>{}
// const asyncHandler=(func)=>()=>{}
// const asyncHandler=(func)=>async()=>{}

// const asyncHandler=(fn)=>async(req, res, next) => {
//     try{
//         await fn(req, res, next)
//     }catch(error){
//         res.status(err.code || 500).json({
//             success:false,
//             message: err.message
//         })
//     }
// }