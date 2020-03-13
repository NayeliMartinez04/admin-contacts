const { UserModel } = require("../models");

class ContactController {
  async getContacts(req, res) {
    const contacts = await UserModel.find({});
    return res.send(contacts);
  }

  async createContact(req, res) {
    const body = req.body;
    const contact = await UserModel.insert(body);
    return res.send(contact);
  }
}

module.exports = new ContactController();
