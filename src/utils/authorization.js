module.exports = (requiredRole) => {
    return (req, res, next) => {
      if (req.isAuthenticated() && req.user.role === requiredRole) {
        return next();
      } else {
        res.status(403).json({ error: 'Unauthorized' });
      }
    };
  };
  