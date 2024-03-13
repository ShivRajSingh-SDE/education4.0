const express = require("express");
const { User } = require("./mongo");
const { Product } = require("./mongo");
const { RoadMap } = require("./mongo");
const { Test } = require("./mongo");
const { Notification } = require("./mongo");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/users/:id", async (req, res) => {
  const userId = req.params.id;

  try {
    // Fetch data for the specified user
    const user = await User.findOne({ _id: `${userId}` });

    if (user) {
      res.json(user);
      console.log("User data retrieved");
    } else {
      res.json("User not found");
      console.log(user);
    }
  } catch (e) {
    res.status(500).json("An error occurred");
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user && (await user.comparePassword(password))) {
      res.json("exist");
      console.log(user, "<-----/login (User found)");
    } else {
      res.json("not exist");
      console.log("User not found or incorrect password");
    }
  } catch (error) {
    console.error("Error in /login:", error);
    res.status(500).json("An error occurred");
  }
});

app.post("/Signup", async (req, res) => {
  const { email, password, name, pic, department } = req.body;

  try {
    const user = await User.findOne({ email: email });

    if (user) {
      res.json("exist");
    } else {
      await User.create({
        email,
        password,
        name,
        pic,
        department, // Include department in the data
      });

      res.json("not exist");
      console.log("New user created");
    }
  } catch (e) {
    console.error("Error in /Signup:", e);
    res.status(500).json(`Error creating user: ${e.message}`);
  }
});

// Define a route for fetching all users
app.get("/users", async (req, res) => {
  try {
    const users = await User.find(); // Fetch all users from the database

    // console.log(users, "<--- from /users ");
    if (users.length > 0) {
      res.json(users);
    } else {
      res.json("No users found");
    }
  } catch (e) {
    res.status(500).json("An error occurred");
  }
});

// user by email
app.get("/api/user/:email", async (req, res) => {
  const { email } = req.params;

  try {
    const user = await User.findOne({ email });
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});

app.post("/reset-password", async (req, res) => {
  const { email, password, confirmPassword, otp } = req.body;

  try {
    let user = await User.findOne({ email });

    if (!user) {
      return res.json("user not found");
    }

    console.log("Stored OTP:", user.resetPasswordOTP);
    console.log("Received OTP:", otp);

    if (!user.resetPasswordOTP) {
      return res.json("stored OTP is undefined");
    }

    // Check if password and confirmPassword match
    if (password !== confirmPassword) {
      return res.json("passwords do not match");
    }

    // Check if the provided OTP matches the stored OTP
    if (user.resetPasswordOTP.trim() !== otp.trim()) {
      return res.json("invalid OTP");
    }

    // Log the user's current password before the update
    console.log("User's current password:", user.password);

    // Update the user's password
    user.password = password;
    user.resetPasswordOTP = null; // Reset the OTP after successful use
    await user.save();

    // Log the user's password after the update
    console.log("User's new password:", user.password);

    res.json("success");
    console.log("Password reset successful");
  } catch (e) {
    console.error("Error in /reset-password:", e);
    res.status(500).json("An error occurred");
  }
});

app.post("/generate-otp", async (req, res) => {
  const { email } = req.body;

  try {
    // Generate OTP
    const otp = generateOTP();
    console.log("Generated OTP:", otp);

    // Fetch user details for email and name
    const user = await User.findOne({ email });

    if (!user) {
      return res.json("user not found");
    }

    const userEmail = user.email;
    const username = user.name; // Assuming that the user has a 'name' property

    // Create or update the user with the generated OTP
    // This is just an example, adjust it based on your actual User model
    await User.findOneAndUpdate(
      { email },
      { $set: { resetPasswordOTP: otp, department: "defaultDepartment" } },
      { new: true, upsert: true }
    );

    // Send OTP to the user's email
    await sendOTPEmail(email, otp, userEmail, username);

    res.json("OTP sent successfully");
  } catch (e) {
    console.error("Error in /generate-otp:", e);
    res.status(500).json("An error occurred");
  }
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "gitamapptech@gmail.com",
    pass: "ajza yvpi ptur jinv",
  },
});

// Function to send an email with the OTP
const sendOTPEmail = async (to, otp, userEmail, username) => {
  try {
    const mailOptions = {
      from: "gitamapptech@gmail.com",
      to,
      subject: "Password Reset OTP",
      text: `Dear ${username},

      We hope this message finds you well. It has come to our attention that you have initiated a password reset for your ${userEmail} account. Your security is our top priority, and we are committed to ensuring a smooth and secure process for your account recovery.
      
      To proceed with the password reset, please use the following One-Time Password (OTP):
      
      OTP: ${otp}
      
      Please be cautious and refrain from sharing this OTP with anyone to maintain the confidentiality of your account information. This OTP is time-sensitive and will expire shortly, so we recommend completing the password reset process at your earliest convenience.
      
      If you did not initiate this password reset request, please contact our support team immediately at [Support Email or Phone Number].
      
      Thank you for choosing AppTechTell. We appreciate your trust in our services.
      
      Best regards,
      
      shivrajsingh.info.me@gmail.com Support Team`,
    };

    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Error sending email");
  }
};

const generateOTP = () => {
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  console.log("Generated OTP:", otp);
  return otp;
};

// admin ---

// course add
app.post("/add/course", async (req, res) => {
  try {
    const {
      imageName,
      imageLink,
      hours,
      starsCount,
      link1,
      link2,
      link3,
      finalLink,
    } = req.body;

    const newProduct = new Product({
      imageName,
      imageLink,
      hours,
      starsCount,
      link1,
      link2,
      link3,
      finalLink,
    });

    await newProduct.save();

    res.status(201).json({ message: "Product added successfully" });
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// roadmap add
app.post("/add/roadmap", async (req, res) => {
  try {
    const { Name, imageLink, link1 } = req.body;

    const newProduct = new RoadMap({
      Name,
      imageLink,
      link1,
    });

    await newProduct.save();

    res.status(201).json({ message: "Product added successfully" });
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// test-notes add
app.post("/add/test-notes", async (req, res) => {
  try {
    const { Name, imageLink, starsCount, link1, link2 } = req.body;

    const newProduct = new Test({
      Name,
      imageLink,
      starsCount,
      link1,
      link2,
    });

    await newProduct.save();

    res.status(201).json({ message: "Product added successfully" });
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// notification add
app.post("/add/notification", async (req, res) => {
  try {
    const { title, content } = req.body;
    const currentDate = new Date();

    const newProduct = new Notification({
      title,
      content,
      date: currentDate,
    });

    await newProduct.save();

    res.status(201).json({ message: "Notification added successfully" });
  } catch (error) {
    console.error("Error adding notification:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get all products
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get all roadmap
app.get("/api/roadmap", async (req, res) => {
  try {
    const roadmap = await RoadMap.find();
    res.json(roadmap);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get all notification
app.get("/api/notification", async (req, res) => {
  try {
    const notification = await Notification.find();
    res.json(notification);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get all test-notes
app.get("/api/test-notes", async (req, res) => {
  try {
    const roadmap = await Test.find();
    res.json(roadmap);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
