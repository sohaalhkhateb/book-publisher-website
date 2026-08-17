import { NarrowView } from '../../components/NarrowView';
import { Header } from '../layout/Header';
import { Outlet } from "react-router";
export function GuestLayout() {
    return (
        <>
            <Header empty={true} />
            <NarrowView>
                <Outlet />
            </NarrowView>
        </>
    )
}