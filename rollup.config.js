module.exports = {
  input: './index.js',
  plugins: testPlugin(),
  output: {
    dir: './dist',
    format: 'esm',
    entryFileNames: '[name]-[hash].js'
  }
}

function testPlugin () {
  return {
    name: 'test',
    renderChunk ( code ) {
      // uncomment next line to see the bug.

      // return code + 'console.log(54)';

      return code;
    }
  };
}
