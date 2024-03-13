const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

mongoose
  .connect(
    "mongodb+srv://amber:amber@cluster0.evciczt.mongodb.net/study?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )

  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error);
  });

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  pic: {
    type: String,
    required: true,
  },
  resetPasswordOTP: {
    type: String, // Assuming OTP is stored as a string
  },
  department: {
    type: String,
    required: true,
  },
});

const productDataSchema = new mongoose.Schema({
  imageName: {
    type: String,
    required: true,
  },
  imageLink: {
    type: String,
    required: true,
  },
  starsCount: {
    type: Number, // Corrected type to Number
    required: true,
  },
  hours: {
    type: Number, // Corrected type to Number
    required: true,
  },
  link1: {
    type: String,
    required: true,
  },
  link2: {
    type: String,
    required: true,
  },
  link3: {
    type: String,
    required: true,
  },
  finalLink: {
    type: String,
    required: true,
  },
});

const RoadMapSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  imageLink: {
    type: String,
    required: true,
  },
  link1: {
    type: String,
    required: true,
  },
});

const testSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  imageLink: {
    type: String,
    required: true,
  },
  starsCount: {
    type: String,
    required: true,
  },
  link1: {
    type: String,
    required: true,
  },
  link2: {
    type: String,
    required: true,
  },
});

const notificationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

userSchema.methods.comparePassword = async function (candidatePassword) {
  try {
    return await bcrypt.compare(candidatePassword, this.password);
  } catch (error) {
    throw new Error("Error comparing passwords");
  }
};

userSchema.pre("save", async function (next) {
  try {
    if (!this.isModified("password")) {
      return next();
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});

const User = mongoose.model("User", userSchema);
const Product = mongoose.model("ProductDataSchema", productDataSchema);
const RoadMap = mongoose.model("roadMapSchema", RoadMapSchema);
const Test = mongoose.model("TestSchema", testSchema);
const Notification = mongoose.model("NotificationSchema", notificationSchema);

module.exports = { User, Product, RoadMap, Test, Notification };
