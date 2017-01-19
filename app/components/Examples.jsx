var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=Taipei'>Taipei, Taiwan</Link> (This is where I live!)
        </li>
        <li>
          <Link to='/?location=Topeka'>Topeka, KS, USA</Link> (This is where my family lives.)
        </li>
      </ol>
    </div>
  );
};

module.exports = Examples;
