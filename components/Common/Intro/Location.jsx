import { DETAILS, SMART_DETAILS } from '../../../constants/constants';
import { getObjectKeys } from '../../../utils/utils';

const Location = () => {
  const keys = getObjectKeys(DETAILS);
  const birthDate = new Date(SMART_DETAILS.DateDeNaissance.split('/').reverse().join('-'));
  const age = new Date().getFullYear() - birthDate.getFullYear();

  return (
    <div className='flex flex-col space-y-1 pt-6'>
      {keys.map((key, index) => {
        return (
          <div key={index} className='flex items-center justify-between'>
            <span className='text-Snow text-xs font-bold'>{key}</span>
            <span className='text-xs text-gray-600'>{DETAILS[key]}</span>
          </div>
        );
      })}
      <div className='flex items-center justify-between'>
        <span className='text-Snow text-xs font-bold'>Age</span>
        <span className='text-xs text-gray-600'>{age}</span>
      </div>
    </div>
  );
};

export default Location;
