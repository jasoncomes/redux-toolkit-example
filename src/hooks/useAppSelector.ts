import { TypedUseSelectorHook, useSelector } from 'react-redux';
import type { AppState } from 'store';

/**
 * useAppSelector is a typed(typescript) wrapper around native Redux
 * useSelector method. This is to prevent the developer from having to type
 * the useSelector every time it is used.
 */
const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export default useAppSelector;
