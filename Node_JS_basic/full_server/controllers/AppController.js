class AppController {
  /**
     * Handles GET / route
     * Sends a welcome message as a response
     * @param {Object} req - Express request object
     * @param {Object} res - Express response object
     */
  static getHomepage(req, res) {
    res.status(200).send('Hello Holberton School!');
  }
}
export default AppController;
