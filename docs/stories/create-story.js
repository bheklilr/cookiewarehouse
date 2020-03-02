const fs = require('fs');
const { join } = require('path');
const args = require('minimist')(process.argv.slice(2), {
  alias: {
    n: 'name',
    u: 'user',
    f: 'feature',
    r: 'reason',
  }
});
const { name, customer, feature, reason } = args;

if (name === undefined) {
  console.log('Must provide a name at minimum');
  process.exit(-1);
}

const DIR = 'docs/stories';
const STORY_FILE_PATTERN = /(\d+)-.+\.md/i;

const current_indexes =
  fs.readdirSync(DIR)
    .filter(name => fs.lstatSync(join(DIR, name)).isFile())
    .map(name => STORY_FILE_PATTERN.exec(name))
    .filter(match => match)
    .map(match => Number.parseInt(match[1]))

const new_index = current_indexes[current_indexes.length - 1] + 1;
const file = join(DIR, `${new_index}-${name}.md`);

const story = `As ${customer || 'a user'}, I ${feature || "[want to]"}, ${reason || "[so that]"}`;

fs.writeFileSync(file, story);