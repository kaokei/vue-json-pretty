import { Plugin } from 'vue';
import Tree from './components/Tree';

export { getDataType, defaultReplacer } from './utils/index'

export default Tree as typeof Tree & Plugin;
