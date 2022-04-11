import BaseLayout from '../components/base-layout/base-layout';
import styles from './index.module.scss';
import radioDefinitions from '../data/radios.json';
import RadioList from '../components/radio-list/radio-list';

export function Index() {
  return (
    <BaseLayout>
      <div className="w-full max-w-lg rounded px-5 py-10 m-5 bg-white shadow dark:bg-gray-900 dark:text-gray-400">
        <h2 className="text-3xl font-light text-center mb-6 dark:text-gray-200">Избери радио:</h2>
        <RadioList radios={radioDefinitions} />
      </div>
    </BaseLayout>
  );
}

export default Index;
