import React, { useEffect, useRef } from 'react'

function ButtonToggleTheme(): React.ReactElement {

    const toggleButtonRef = useRef<HTMLHeadingElement>(null)

    useEffect(() => {
        const profileColor: string | null = localStorage.getItem('profile-color-modes')

        if (profileColor === 'checked') {
            toggleButtonRef.current?.ownerDocument.body.classList.add('checked')
            toggleButtonRef.current?.classList.add('checked')
        }

        toggleButtonRef.current?.addEventListener('click', () => {
            const isChecked: any = toggleButtonRef.current?.getAttribute('class')?.split(' ')[1]

            if (isChecked === 'checked') {
                toggleButtonRef.current?.classList.remove('checked')
                toggleButtonRef.current?.ownerDocument.body.classList.remove('checked')
                localStorage.removeItem('profile-color-modes')
            } else {
                toggleButtonRef.current?.classList.add('checked')
                toggleButtonRef.current?.ownerDocument.body.classList.add('checked')
                localStorage.setItem('profile-color-modes', 'checked')
            }
        });

    }, [])

    return (
        <span className="profile-color-modes-toggle">
            <div className="profile-color-modes-toggle-track"></div>
            <div className="profile-color-modes-toggle-thumb" ref={toggleButtonRef}>
                <svg style={{ fill: '#f0e68c', marginTop: 7, marginRight: 0, marginBottom: 0, marginLeft: 7 }} aria-hidden="true" width="14" height="13"
                    viewBox="0 0 14 13" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                        d="M4.52208 7.71754C7.5782 7.71754 10.0557 5.24006 10.0557 2.18394C10.0557 1.93498 10.0392 1.68986 10.0074 1.44961C9.95801 1.07727 10.3495 0.771159 10.6474 0.99992C12.1153 2.12716 13.0615 3.89999 13.0615 5.89383C13.0615 9.29958 10.3006 12.0605 6.89485 12.0605C3.95334 12.0605 1.49286 10.001 0.876728 7.24527C0.794841 6.87902 1.23668 6.65289 1.55321 6.85451C2.41106 7.40095 3.4296 7.71754 4.52208 7.71754Z">
                    </path>
                </svg>
            </div>
        </span>
    )
}

export default ButtonToggleTheme