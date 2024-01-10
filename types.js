const zod=require("zod");

const createTodo=zod.object({
    titleSchema:zod.string(),
    descriptionSchema:zod.string(),
});
const updateTodo=zod.object({
    title:zod.string(),
    description:zod.string()
});

module.exports={
    createTodo:createTodo,
    updateTodo:updateTodo
}
