import Header from '../components/Header';
import Content from '../components/MainContent';
import Theme2 from '../components/Theme2';
import { useTheme } from '../context/ThemeContext';

const Layout = () => {
    const { theme } = useTheme();
    return (
        <div className='flex w-full'>
            <Header />
            <main className="pt-20 px-4">
             {theme === 'theme-2' ? <Theme2 /> : <Content />}
            </main>
        </div>
    )
}

export default Layout