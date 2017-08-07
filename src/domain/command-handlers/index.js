import container from '../../config/container';

module.exports = Object.keys(container.registrations)
  .filter((registration) => registration.match(/Handler$/))
  .map((handler) => container.resolve(handler));
