import { classNames } from 'shared/lib/classNames/classNames';
import './Loader.scss';

 interface LoaderProps {
 className?: string;
 }
export const Loader = ({ className }: LoaderProps) => (
    <div className={classNames('loadingio-spinner-spin-sv1f1h13pm', {}, [className])}>
        <div className="ldio-gukagzps85l">
            <div><div /></div>
            <div><div /></div>
            <div><div /></div>
            <div><div /></div>
            <div><div /></div>
            <div><div /></div>
            <div><div /></div>
            <div><div /></div>
        </div>
    </div>
);

export default Loader;
