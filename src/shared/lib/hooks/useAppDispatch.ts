import { useDispatch } from 'react-redux';
import { DispatchType } from 'app/providers/storeProvider';

export const useAppDispatch = () => useDispatch<DispatchType>();
