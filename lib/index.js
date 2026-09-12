import chalk from 'chalk';
import cfonts from 'cfonts'
import makeWASocket from './Socket/index.js';
export * from '../WAProto/index.js';
export * from './Utils/index.js';
export * from './Types/index.js';
export * from './Store/index.js';
export * from './Defaults/index.js';
export * from './WABinary/index.js';
export * from './WAM/index.js';
export * from './WAUSync/index.js';
export { makeWASocket };
export default makeWASocket;

console.clear();
cfonts.say('Dansz\nOffc', {
  font: 'block',
  align: 'center',
  //colors: [ "magenta", "cyan", ],
  gradient: ['magenta', 'cyan'],
  background: 'transparent',
  maxLength: 6,
  rawMode: false,
});
cfonts.say('Dansz Forever Created By Dansz ID', {
  font: 'console',
  align: 'center',
  //colors: [ "magenta", "cyan", ],
  gradient: ['cyan', 'magenta'],
  background: 'transparent',
  maxLength: 21,
  rawMode: false,
});
//# sourceMappingURL=index.js.map
