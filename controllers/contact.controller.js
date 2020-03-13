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

  async updateContact(req, res) {
    const { id } = req.params;
    const body = req.body;
    const contact = await UserModel.update({ _id: id }, body);
    return res.send(contact);
  }

  async deleteContact(req, res) {
    const { id } = req.params;
    await UserModel.remove({ _id: id });
    return res.send(true);
  }
}

module.exports = new ContactController();
