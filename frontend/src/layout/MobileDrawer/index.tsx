import { NavbarItems } from "../Navbar"
import LoggatedActions from "@/components/LoggatedActions"
import RedirectLink from "@/components/RedirectLink"
// Mantine components
import { Drawer } from "@mantine/core"

interface MobileDrawerProps {
    open: boolean
    closeDrawer: () => void
    isLoggated: boolean
}

export default function MobileDrawer({
    open,
    closeDrawer,
    isLoggated,
}: MobileDrawerProps) {
    return (
        <Drawer position="right" size="xs" opened={open} onClose={closeDrawer}>
            <div className="p-4">
                <NavbarItems mobile={true} closeDrawer={closeDrawer} />

                <div className="absolute bottom-0 left-0 w-full justify-around py-4 border-t border-slate-300">
                    {isLoggated ? (
                        <LoggatedActions closeDrawer={closeDrawer} />
                    ) : (
                        <RedirectLink
                            path="/auth"
                            text="Login"
                            handle={closeDrawer}
                        />
                    )}
                </div>
            </div>
        </Drawer>
    )
}
