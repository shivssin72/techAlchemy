const db = require("../models/mysql");
const User = db.user;

const checkDuplicateEmail = async (req, res, next) => {
	try {
		// Email
		const user = await User.findOne({
			where: {
				email: req.body.email
			}
		});

		if (user) {
			return res.status(400).send({
				message: "Failed! Email is already in use!"
			});
		}

		next();
	} catch (error) {
		return res.status(500).send({
			message: "Unable to validate Username!"
		});
	}
};
const verifySignUp = {
	checkDuplicateEmail,
};

module.exports = verifySignUp;
