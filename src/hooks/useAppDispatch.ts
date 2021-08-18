import { useDispatch } from 'react-redux';
import type { AppDispatch } from 'store';

/**
 * useAppDispatch is a typed(typescript) wrapper around native Redux
 * useDispatch method. This is to prevent the developer from having to type
 * the useDispatch every time it is used.
 */
const useAppDispatch = () => useDispatch<AppDispatch>();

export default useAppDispatch;
