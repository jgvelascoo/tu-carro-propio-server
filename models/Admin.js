import mongoose from "mongoose";

const adminSchema = mongoose.Schema({
  name: { type: String, required:  true },
  email: { type: String, required: true },
  password: { type: String, required: true },
},
{
  collection: 'admin'
});

var Admin = mongoose.model("Admin", adminSchema);

export default Admin;