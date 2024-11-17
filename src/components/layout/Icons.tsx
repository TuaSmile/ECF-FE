// components/layout/CustomIcons.tsx
import React from 'react';
interface IconProps {
    color: string;
}

export const HomeIcon: React.FC<IconProps> = ({ color }) => (
    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.05128 18L2.05129 8.40878L1.28029 9.05892C0.962762 9.32667 0.476553 9.29954 0.194309 8.99832C-0.0879358 8.6971 -0.0593352 8.23586 0.25819 7.96811L9.48895 0.184323C9.7804 -0.061441 10.2196 -0.061441 10.511 0.184323L19.7418 7.96811C20.0593 8.23586 20.0879 8.6971 19.8057 8.99832C19.5234 9.29954 19.0372 9.32667 18.7197 9.05892L17.9487 8.40878L17.9487 18H2.05128ZM12.8205 16.5405H16.4103V7.11148L10 1.70608L3.58975 7.11148V16.5405H7.17949V11.4324C7.17949 11.0294 7.52388 10.7027 7.94872 10.7027H12.0513C12.4761 10.7027 12.8205 11.0294 12.8205 11.4324V16.5405ZM8.71795 12.1622V16.5405H11.282V12.1622H8.71795Z"
            fill={color}
        />
    </svg>
);

export const TaskIcon: React.FC<IconProps> = ({ color }) => (
    <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.92369 1.01523C4.00811 1.01523 4.07655 0.947048 4.07655 0.862944C4.07655 0.386353 4.46438 0 4.9428 0H11.0574C11.5359 0 11.9237 0.386353 11.9237 0.862944C11.9237 0.947048 11.9921 1.01523 12.0766 1.01523H14.1148C15.156 1.01523 16.0001 1.85612 16.0001 2.8934V18.1218C16.0001 19.1591 15.156 20 14.1148 20H1.88547C0.844223 20 0.00012207 19.1591 0.00012207 18.1218V2.8934C0.00012207 1.85611 0.844222 1.01523 1.88547 1.01523H3.92369ZM1.88547 2.74112C1.80105 2.74112 1.73261 2.8093 1.73261 2.8934V18.1218C1.73261 18.2059 1.80105 18.2741 1.88547 18.2741H14.1148C14.1992 18.2741 14.2676 18.2059 14.2676 18.1218V2.8934C14.2676 2.8093 14.1992 2.74112 14.1148 2.74112H12.0766C11.9921 2.74112 11.9237 2.8093 11.9237 2.8934V3.90863C11.9237 4.38522 11.5359 4.77157 11.0574 4.77157H4.9428C4.46438 4.77157 4.07655 4.38522 4.07655 3.90863V2.8934C4.07655 2.8093 4.00811 2.74112 3.92369 2.74112H1.88547ZM5.96191 1.72589C5.87748 1.72589 5.80904 1.79407 5.80904 1.87817V2.8934C5.80904 2.97751 5.87748 3.04569 5.96191 3.04569H10.0383C10.1228 3.04569 10.1912 2.97751 10.1912 2.8934V1.87817C10.1912 1.79407 10.1228 1.72589 10.0383 1.72589H5.96191Z"
            fill={color} />
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.5 8.9999C11.5 9.44173 11.1419 9.7999 10.7 9.7999H5.30002C4.8582 9.7999 4.50002 9.44173 4.50002 8.9999C4.50002 8.55807 4.8582 8.1999 5.30002 8.1999H10.7C11.1419 8.1999 11.5 8.55807 11.5 8.9999ZM11.5 12.9999C11.5 13.4417 11.1419 13.7999 10.7 13.7999H5.30002C4.8582 13.7999 4.50002 13.4417 4.50002 12.9999C4.50002 12.5581 4.8582 12.1999 5.30002 12.1999H10.7C11.1419 12.1999 11.5 12.5581 11.5 12.9999Z"
            fill={color} />
    </svg>

);

export const LeadIcon: React.FC<IconProps> = ({ color }) => (
    <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 0.5C10.0196 0.5 8.414 2.07744 8.414 4.02347V4.92546C8.414 6.87149 10.0196 8.44893 12 8.44893C13.9804 8.44893 15.586 6.87149 15.586 4.92546V4.02347C15.586 2.07744 13.9804 0.5 12 0.5ZM9.88792 4.02347C9.88792 2.87748 10.8335 1.94834 12 1.94834C13.1665 1.94834 14.1121 2.87748 14.1121 4.02347V4.92546C14.1121 6.07146 13.1665 7.0006 12 7.0006C10.8335 7.0006 9.88792 6.07146 9.88792 4.92546V4.02347Z"
            fill={color} />
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.11198 10.2043C6.72708 10.2043 7.30411 10.365 7.80182 10.6461C8.54093 10.1327 9.44329 9.831 10.4172 9.831H13.5828C14.5567 9.831 15.4591 10.1327 16.1982 10.6461C16.6959 10.365 17.2729 10.2043 17.888 10.2043H20.1039C21.9795 10.2043 23.5 11.6982 23.5 13.5411V14.412C23.5 15.293 22.7731 16.0071 21.8767 16.0071H18.0596C17.8432 16.8645 17.0548 17.5 16.1153 17.5H7.88472C6.94521 17.5 6.15679 16.8645 5.94035 16.0071H2.12333C1.22686 16.0071 0.5 15.293 0.5 14.412V13.5411C0.5 11.6982 2.02054 10.2043 3.89606 10.2043H6.11198ZM7.35544 14.2876C7.35544 12.6262 8.72616 11.2793 10.4172 11.2793H13.5828C15.2738 11.2793 16.6446 12.6262 16.6446 14.2876V15.5317C16.6446 15.8188 16.4077 16.0517 16.1153 16.0517H7.88472C7.59233 16.0517 7.35544 15.8188 7.35544 15.5317V14.2876ZM6.11198 11.6526C6.31514 11.6526 6.51085 11.6836 6.69454 11.7409C6.18208 12.4628 5.88152 13.3408 5.88152 14.2876V14.5588H2.12333C2.04073 14.5588 1.97391 14.493 1.97391 14.412L1.97391 13.5411C1.97391 12.4982 2.83441 11.6526 3.89606 11.6526L6.11198 11.6526ZM18.1185 14.2876C18.1185 13.3408 17.8179 12.4628 17.3055 11.7409C17.4892 11.6836 17.6849 11.6526 17.888 11.6526L20.1039 11.6526C21.1656 11.6526 22.0261 12.4982 22.0261 13.5411V14.412C22.0261 14.493 21.9593 14.5588 21.8767 14.5588H18.1185V14.2876ZM18.0664 14.2876C18.0664 13.3461 17.7659 12.4737 17.2539 11.7578C17.2479 11.7493 17.2417 11.7408 17.2356 11.7324C17.2313 11.7264 17.2269 11.7204 17.2225 11.7144C17.2395 11.7084 17.2567 11.7026 17.274 11.6971C17.2981 11.6893 17.3225 11.682 17.347 11.6752C17.3049 11.6869 17.2635 11.7 17.2225 11.7144C17.7536 12.4383 18.0664 13.327 18.0664 14.2876Z"
            fill={color} />
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.00402 3.20445C3.49565 3.20445 2.27274 4.4059 2.27274 5.88812V6.5724C2.27274 8.05462 3.49565 9.25607 5.00402 9.25607C6.5124 9.25607 7.73531 8.05462 7.73531 6.5724V5.88812C7.73531 4.4059 6.5124 3.20445 5.00402 3.20445ZM3.74665 5.88812C3.74665 5.20594 4.30952 4.65278 5.00402 4.65278C5.69852 4.65278 6.26139 5.20594 6.26139 5.88812V6.5724C6.26139 7.25458 5.69852 7.80774 5.00402 7.80774C4.30952 7.80774 3.74665 7.25458 3.74665 6.5724V5.88812Z"
            fill={color} />
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M18.996 3.20445C17.4876 3.20445 16.2647 4.4059 16.2647 5.88812V6.5724C16.2647 8.05462 17.4876 9.25607 18.996 9.25607C20.5044 9.25607 21.7273 8.05462 21.7273 6.5724V5.88812C21.7273 4.4059 20.5044 3.20445 18.996 3.20445ZM17.7386 5.88812C17.7386 5.20594 18.3015 4.65278 18.996 4.65278C19.6905 4.65278 20.2533 5.20594 20.2533 5.88812V6.5724C20.2533 7.25458 19.6905 7.80774 18.996 7.80774C18.3015 7.80774 17.7386 7.25458 17.7386 6.5724V5.88812Z"
            fill={color} />
    </svg>
);

export const LoanIcon: React.FC<IconProps> = ({ color }) => (
    <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M12.5996 1.93769C12.3126 1.93769 12.08 2.16978 12.08 2.45608V2.64705H11.8755C11.4688 2.64705 11.0788 2.80823 10.7912 3.09514C10.5036 3.38205 10.3421 3.77118 10.3421 4.17693C10.3421 4.58268 10.5036 4.97181 10.7912 5.25872C11.0788 5.54563 11.4688 5.70682 11.8755 5.70682H13.3237C13.4548 5.70682 13.5805 5.75877 13.6732 5.85124C13.7659 5.94372 13.818 6.06914 13.818 6.19992C13.818 6.3307 13.7659 6.45612 13.6732 6.5486C13.5805 6.64107 13.4548 6.69302 13.3237 6.69302H10.8617C10.5747 6.69302 10.3421 6.92511 10.3421 7.21141C10.3421 7.49771 10.5747 7.7298 10.8617 7.7298H12.08V7.97332C12.08 8.25962 12.3126 8.49171 12.5996 8.49171C12.8865 8.49171 13.1192 8.25962 13.1192 7.97332V7.7298H13.3237C13.7304 7.7298 14.1204 7.56862 14.408 7.28171C14.6955 6.9948 14.8571 6.60567 14.8571 6.19992C14.8571 5.79417 14.6955 5.40504 14.408 5.11813C14.1204 4.83122 13.7304 4.67003 13.3237 4.67003H11.8755C11.7444 4.67003 11.6187 4.61808 11.526 4.52561C11.4333 4.43313 11.3812 4.30771 11.3812 4.17693C11.3812 4.04615 11.4333 3.92073 11.526 3.82825C11.6187 3.73578 11.7444 3.68383 11.8755 3.68383H14.0479C14.3348 3.68383 14.5674 3.45174 14.5674 3.16544C14.5674 2.87914 14.3348 2.64705 14.0479 2.64705H13.1192V2.45608C13.1192 2.16978 12.8865 1.93769 12.5996 1.93769Z"
            fill={color} />
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.4884 0C9.49678 0 7.07162 2.36788 7.07162 5.2888C7.07162 8.20972 9.49678 10.5776 12.4884 10.5776C15.4799 10.5776 17.9051 8.20972 17.9051 5.2888C17.9051 2.36788 15.4799 0 12.4884 0ZM8.61926 5.2888C8.61926 3.20243 10.3515 1.51109 12.4884 1.51109C14.6252 1.51109 16.3575 3.20243 16.3575 5.2888C16.3575 7.37517 14.6252 9.06651 12.4884 9.06651C10.3515 9.06651 8.61926 7.37517 8.61926 5.2888Z"
            fill={color} />
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M19.4467 9.09143C19.9694 9.17567 20.3748 9.45535 20.6064 9.70066C20.6403 9.73656 20.6705 9.77557 20.6967 9.81717C21.0638 10.4004 21.0424 11.0214 20.9196 11.4933C20.8009 11.9494 20.5718 12.339 20.3785 12.5822L17.48 16.5292C17.0104 17.2577 16.2665 17.6409 15.613 17.8372C14.9651 18.0318 14.319 18.0705 13.8876 18.0438H9.18174C9.15386 18.0438 9.12601 18.0423 9.09829 18.0394C8.93773 18.0224 8.80283 18.0134 8.6904 18.0097C8.94994 18.4035 8.92881 18.9465 8.61215 19.3133L6.58431 21.6622C6.21706 22.0876 5.59137 22.1149 5.1868 21.7231L0.32438 17.0141C-0.0801902 16.6223 -0.110442 15.9599 0.25681 15.5345L2.28465 13.1856C2.65191 12.7602 3.27759 12.7329 3.68216 13.1247L3.98844 13.4213C4.00309 13.4038 4.01868 13.3867 4.0352 13.3702C5.34593 12.059 6.41523 11.4259 7.40538 11.1516C8.17393 10.9386 8.88029 10.9592 9.4345 10.9753C9.56876 10.9792 9.69416 10.9828 9.80928 10.9828H14.3384C15.0813 10.9828 15.6546 11.2152 16.0594 11.5352L17.6388 9.72311C17.6583 9.70072 17.6792 9.67946 17.7012 9.65945C18.258 9.15397 18.8792 8.99996 19.4467 9.09143ZM5.08196 14.4803L7.42053 16.7451L7.42505 16.7421C7.46799 16.7139 7.51566 16.6875 7.56835 16.6633C7.67337 16.6151 7.79851 16.5755 7.94814 16.547C8.23638 16.4922 8.64065 16.4739 9.22261 16.5327H13.9137C13.9323 16.5327 13.9509 16.5334 13.9695 16.5347C14.2342 16.5534 14.7006 16.5303 15.1579 16.3929C15.6175 16.2548 15.9777 16.0302 16.1771 15.7134C16.1867 15.6982 16.1968 15.6833 16.2075 15.6687L19.1302 11.6888C19.1372 11.6792 19.1445 11.6698 19.1519 11.6606C19.2345 11.5586 19.3599 11.3507 19.4196 11.1212C19.4675 10.9373 19.4615 10.7929 19.4142 10.6782C19.3584 10.6375 19.2785 10.5959 19.1946 10.5823C19.1447 10.5743 19.0917 10.5756 19.0311 10.594C18.9749 10.6111 18.8911 10.6495 18.7847 10.7401L16.8572 12.9515C16.9244 13.344 16.8826 13.7776 16.7101 14.1687C16.435 14.7926 15.8382 15.2814 14.9427 15.3524C14.9219 15.354 14.901 15.3549 14.8801 15.3549H10.9405C10.5132 15.3549 10.1667 15.0166 10.1667 14.5993C10.1667 14.1821 10.5132 13.8438 10.9405 13.8438H14.8447C15.0045 13.8273 15.0971 13.7824 15.1513 13.7441C15.2099 13.7026 15.2556 13.646 15.2886 13.5712C15.3655 13.3968 15.3454 13.1888 15.2983 13.0906C15.2651 13.0213 15.2429 12.9476 15.2324 12.8721C15.2137 12.8393 15.1751 12.7859 15.1098 12.7297C14.9891 12.6258 14.7568 12.4939 14.3384 12.4939H9.80928C9.6177 12.4939 9.44342 12.4895 9.2798 12.4853C8.75899 12.4721 8.34623 12.4616 7.8279 12.6053C7.18212 12.7842 6.33713 13.2309 5.1427 14.4257C5.12324 14.4451 5.10296 14.4634 5.08196 14.4803ZM15.2446 12.8971L15.244 12.8961C15.244 12.8961 15.2423 12.8922 15.241 12.8883C15.2438 12.8942 15.2446 12.8971 15.2446 12.8971ZM1.4086 16.2256L3.03746 14.3389L7.46036 18.6222L5.8315 20.5089L1.4086 16.2256Z"
            fill={color} />
    </svg>

);

export const PricingIcon: React.FC<IconProps> = ({ color }) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10 1.71429C5.42393 1.71429 1.71429 5.42393 1.71429 10C1.71429 14.5761 5.42393 18.2857 10 18.2857C14.5761 18.2857 18.2857 14.5761 18.2857 10C18.2857 5.42393 14.5761 1.71429 10 1.71429ZM0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10Z"
            fill={color} />
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.0001 3.4209C10.4361 3.4209 10.7895 3.77436 10.7895 4.21037V4.92808H12.6795C13.1155 4.92808 13.469 5.28154 13.469 5.71755C13.469 6.15356 13.1155 6.50702 12.6795 6.50702H8.46496C8.10436 6.50702 7.75853 6.65027 7.50355 6.90526C7.24856 7.16024 7.10531 7.50607 7.10531 7.86667C7.10531 8.22727 7.24856 8.57311 7.50355 8.82809C7.75853 9.08307 8.10436 9.22632 8.46496 9.22632H11.5351C12.3145 9.22632 13.0619 9.53592 13.613 10.087C14.1641 10.6381 14.4737 11.3856 14.4737 12.1649C14.4737 12.9443 14.1641 13.6917 13.613 14.2428C13.0619 14.7939 12.3145 15.1035 11.5351 15.1035H10.7895V15.9329C10.7895 16.3689 10.4361 16.7223 10.0001 16.7223C9.56404 16.7223 9.21058 16.3689 9.21058 15.9329V15.1035H6.9453C6.50929 15.1035 6.15583 14.7501 6.15583 14.314C6.15583 13.878 6.50929 13.5246 6.94531 13.5246H11.5351C11.8957 13.5246 12.2416 13.3813 12.4966 13.1263C12.7515 12.8714 12.8948 12.5255 12.8948 12.1649C12.8948 11.8043 12.7515 11.4585 12.4966 11.2035C12.2416 10.9485 11.8957 10.8053 11.5351 10.8053H8.46496C7.6856 10.8053 6.93816 10.4957 6.38706 9.94457C5.83597 9.39348 5.52637 8.64604 5.52637 7.86667C5.52637 7.08731 5.83597 6.33987 6.38706 5.78877C6.93816 5.23768 7.6856 4.92808 8.46496 4.92808H9.21058V4.21037C9.21058 3.77436 9.56404 3.4209 10.0001 3.4209Z"
            fill={color} />
    </svg>

);

export const MarketingIcon: React.FC<IconProps> = ({ color }) => (
    <svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.5364 0.0204439C13.8916 0.102296 14.1429 0.413933 14.1429 0.772799V12.3485C14.1429 12.7083 13.8904 13.0204 13.534 13.1014C13.2049 13.1762 12.8676 13.0356 12.6915 12.7591C12.6888 12.7561 12.6852 12.7524 12.6808 12.7479C12.6432 12.71 12.5426 12.6191 12.3324 12.4898C11.9087 12.2291 11.0687 11.83 9.48022 11.3961C9.30131 11.3472 9.10882 11.3006 8.90476 11.2563V16.2273C8.90476 16.654 8.55299 17 8.11905 17H4.97619C4.54225 17 4.19048 16.654 4.19048 16.2273V10.6714C4.12695 10.667 4.0638 10.6627 4.00105 10.6585C1.79909 10.5115 0 8.73805 0 6.52366C0 4.34778 1.74155 2.58283 3.91608 2.41852C5.79163 2.2768 8.03622 2.04989 9.51494 1.71657C11.0366 1.37358 11.8604 0.978623 12.2829 0.706643C12.493 0.571357 12.6026 0.46737 12.6503 0.416033C12.6644 0.400849 12.6734 0.390034 12.6781 0.384081C12.8506 0.092283 13.1982 -0.0574549 13.5364 0.0204439ZM12.5714 2.322C11.9514 2.62997 11.0829 2.94865 9.86601 3.22295C8.26098 3.58475 5.91091 3.81779 4.03646 3.95943C2.64908 4.06426 1.57143 5.18621 1.57143 6.52366C1.57143 7.88167 2.68533 9.02165 4.10749 9.1166C4.4069 9.13659 4.71728 9.15926 5.03385 9.18497C5.03918 9.18535 5.04449 9.18578 5.04979 9.18626C6.10683 9.27238 7.23202 9.39237 8.24855 9.55943C8.83825 9.65634 9.40209 9.7708 9.90073 9.907C11.1123 10.2379 11.9668 10.564 12.5714 10.8569V2.322ZM12.6519 12.6892C12.6519 12.6892 12.6519 12.6892 12.6519 12.6893L12.652 12.6893C12.652 12.6893 12.652 12.6893 12.6519 12.6892ZM5.76191 10.8016V15.4546H7.33333V10.9846C6.82299 10.9138 6.29187 10.8532 5.76191 10.8016ZM19.7928 0.890386C20.0161 1.25633 19.8954 1.73099 19.5233 1.95055L16.9042 3.496C16.5321 3.71557 16.0495 3.59691 15.8263 3.23096C15.603 2.86501 15.7237 2.39036 16.0958 2.17079L18.7148 0.625344C19.0869 0.405775 19.5695 0.524439 19.7928 0.890386ZM16.7619 6.43944C16.7619 6.01268 17.1137 5.66672 17.5476 5.66672H21.2143C21.6482 5.66672 22 6.01268 22 6.43944C22 6.8662 21.6482 7.21216 21.2143 7.21216H17.5476C17.1137 7.21216 16.7619 6.8662 16.7619 6.43944ZM15.8263 9.13277C16.0495 8.76683 16.5321 8.64816 16.9042 8.86773L19.5233 10.4132C19.8954 10.6327 20.0161 11.1074 19.7928 11.4733C19.5695 11.8393 19.0869 11.958 18.7148 11.7384L16.0958 10.1929C15.7237 9.97337 15.603 9.49872 15.8263 9.13277Z"
            fill={color} />
    </svg>
);

export const ReportIcon: React.FC<IconProps> = ({ color }) => (
    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M1.46938 0C0.657866 0 0 0.658573 0 1.47096V15.6903C0 16.5027 0.657865 17.1612 1.46938 17.1612H7.56621L6.55277 15.6903H1.46938V1.47096H12.7347V7.7997L14.204 7.79975V1.47096C14.204 0.658573 13.5462 0 12.7347 0H1.46938Z"
            fill={color} />
        <path
            d="M13.1693 10.7255C13.335 10.7255 13.4693 10.8598 13.4693 11.0255V11.4025H14.5469C14.7126 11.4025 14.8469 11.5368 14.8469 11.7025V12.0831C14.8469 12.2488 14.7126 12.3831 14.5469 12.3831H12.2907C12.1649 12.3831 12.0442 12.4332 11.9552 12.5223C11.8663 12.6113 11.8163 12.7322 11.8163 12.8581C11.8163 12.9841 11.8662 13.1049 11.9552 13.194C12.0442 13.2831 12.1649 13.3331 12.2907 13.3331H13.6683C14.0539 13.3331 14.4238 13.4865 14.6965 13.7595C14.9692 14.0325 15.1224 14.4027 15.1224 14.7888C15.1224 15.1748 14.9692 15.5451 14.6965 15.8181C14.4238 16.0911 14.0539 16.2444 13.6683 16.2444H13.4693V16.6715C13.4693 16.8372 13.335 16.9715 13.1693 16.9715H12.7897C12.624 16.9715 12.4897 16.8372 12.4897 16.6715V16.2444H11.1367C10.971 16.2444 10.8367 16.1101 10.8367 15.9444V15.5638C10.8367 15.3981 10.971 15.2638 11.1367 15.2638H13.6683C13.7941 15.2638 13.9148 15.2137 14.0038 15.1247C14.0928 15.0356 14.1428 14.9148 14.1428 14.7888C14.1428 14.6628 14.0928 14.542 14.0038 14.4529C13.9148 14.3638 13.7941 14.3138 13.6683 14.3138H12.2907C11.9051 14.3138 11.5353 14.1604 11.2626 13.8874C10.9899 13.6145 10.8367 13.2442 10.8367 12.8581C10.8367 12.4721 10.9899 12.1018 11.2626 11.8289C11.5353 11.5559 11.9051 11.4025 12.2907 11.4025H12.4897V11.0255C12.4897 10.8598 12.624 10.7255 12.7897 10.7255H13.1693Z"
            fill={color} />
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.9796 19C15.7523 19 18 16.7499 18 13.9742C18 11.1788 16 8.94966 12.9796 8.94966C10 8.94966 7.95923 11.245 7.95923 13.9742C7.95923 16.6783 10.2472 19 12.9796 19ZM12.9796 10.1742C10.8832 10.1742 9.18371 11.8755 9.18371 13.9742C9.18371 16.0729 10.8832 17.7742 12.9796 17.7742C15.076 17.7742 16.7755 16.0729 16.7755 13.9742C16.7755 11.8755 15.076 10.1742 12.9796 10.1742Z"
            fill={color} />
        <path
            d="M3.67341 3.92221C3.26765 3.92221 2.93872 4.2515 2.93872 4.65769C2.93872 5.06389 3.26765 5.39318 3.67341 5.39318H10.5305C10.9363 5.39318 11.2652 5.06389 11.2652 4.65769C11.2652 4.2515 10.9363 3.92221 10.5305 3.92221H3.67341Z"
            fill={color} />
        <path
            d="M3.67341 6.86465C3.26765 6.86465 2.93872 7.19393 2.93872 7.60013C2.93872 8.00632 3.26765 8.33561 3.67341 8.33561H6.61218C7.01794 8.33561 7.34687 8.00632 7.34687 7.60013C7.34687 7.19393 7.01794 6.86465 6.61218 6.86465H3.67341Z"
            fill={color} />
        <path
            d="M2.93872 10.542C2.93872 10.1358 3.26765 9.80656 3.67341 9.80656H6.61218C7.01794 9.80656 7.34687 10.1358 7.34687 10.542C7.34687 10.9482 7.01794 11.2775 6.61218 11.2775H3.67341C3.26765 11.2775 2.93872 10.9482 2.93872 10.542Z"
            fill={color} />
    </svg>
);

export const UserIcon: React.FC<IconProps> = ({ color }) => (
    <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.6392 13.269L17.3875 14.8986L17.4954 14.8213C17.975 14.4775 18.5492 14.2913 19.1388 14.2882C19.7359 14.2859 20.3185 14.4715 20.8046 14.8188C21.2907 15.1661 21.6556 15.6576 21.848 16.2239C22.0403 16.7901 22.0504 17.4026 21.8767 17.9749C21.703 18.5472 21.3544 19.0505 20.8799 19.4136C20.4055 19.7767 19.8293 19.9814 19.2325 19.9988C18.6357 20.0162 18.0486 19.8454 17.5539 19.5105C17.0592 19.1756 16.682 18.6935 16.4754 18.1323C16.2688 17.5711 16.2433 16.959 16.4025 16.3825L16.4439 16.2325L13.8334 14.6745L13.7214 14.7861C12.9966 15.508 12.0162 15.9132 10.9942 15.9132C9.97225 15.9132 8.99182 15.508 8.26704 14.7861L8.15502 14.6745L5.54252 16.2337L5.58671 16.3853C5.65873 16.6324 5.69707 16.8881 5.7007 17.1455C5.70043 17.7098 5.53327 18.2615 5.22033 18.7307C4.90713 19.2004 4.46197 19.5664 3.94113 19.7826C3.4203 19.9988 2.84719 20.0553 2.29428 19.9451C1.74136 19.8349 1.23348 19.5629 0.83485 19.1635C0.436221 18.7641 0.164751 18.2552 0.05477 17.7012C-0.0552115 17.1473 0.00123502 16.573 0.216971 16.0512C0.432708 15.5293 0.798045 15.0833 1.26678 14.7695C1.73539 14.4558 2.28629 14.2883 2.84987 14.2882C3.43942 14.2913 4.0135 14.4776 4.49301 14.8213L4.60095 14.8986L7.34918 13.269L7.29931 13.1138C7.18806 12.7679 7.12959 12.407 7.12588 12.0436C7.12895 11.1869 7.41518 10.3554 7.93986 9.67902C8.46481 9.00226 9.19884 8.51895 10.0271 8.30467L10.1798 8.26517V5.59658L10.0441 5.5485C9.41016 5.32393 8.87587 4.88205 8.53566 4.30096C8.19544 3.71986 8.07121 3.03697 8.18491 2.37297C8.29861 1.70898 8.64293 1.10663 9.15701 0.672398C9.67109 0.238164 10.3218 0 10.9942 0C11.6666 0 12.3173 0.238164 12.8314 0.672398C13.3455 1.10663 13.6898 1.70898 13.8035 2.37297C13.9172 3.03697 13.793 3.71986 13.4528 4.30096C13.1125 4.88205 12.5783 5.32393 11.9443 5.5485L11.8086 5.59658V8.26517L11.9613 8.30467C12.7896 8.51895 13.5236 9.00226 14.0486 9.67902C14.5732 10.3554 14.8595 11.1869 14.8625 12.0436C14.8588 12.407 14.8004 12.7679 14.6891 13.1138L14.6392 13.269Z"
            fill={color} />
    </svg>

);

export const HelpCenter: React.FC<IconProps> = ({ color }) => (
    <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.15919 2.85414C6.10038 1.91853 7.37691 1.39292 8.70796 1.39292C10.039 1.39292 11.3155 1.91853 12.2567 2.85414C12.6901 3.28499 13.0361 3.78651 13.2832 4.3315V9.79339H15.2135C16.0427 9.79339 16.7148 9.12521 16.7148 8.30098V5.60043C16.7148 4.77619 16.0427 4.10801 15.2135 4.10801H14.7056C14.7016 4.09582 14.6972 4.08367 14.6925 4.07157C14.3729 3.25351 13.8839 2.50177 13.2475 1.86919C12.0436 0.67237 10.4106 0 8.70796 0C7.00528 0 5.37234 0.672369 4.16837 1.86919C3.52257 2.51116 3.02856 3.27583 2.70933 4.10801H2.20152C1.37236 4.10801 0.700195 4.77619 0.700195 5.60043V8.30098C0.700195 9.12521 1.37236 9.79339 2.20152 9.79339H4.13179V4.33344C4.379 3.78769 4.72526 3.28549 5.15919 2.85414ZM8.70741 3.66748C7.19913 3.66748 5.97643 4.88292 5.97643 6.38225C5.97643 7.88157 7.19913 9.09701 8.70741 9.09701C10.2157 9.09701 11.4384 7.88157 11.4384 6.38225C11.4384 4.88292 10.2157 3.66748 8.70741 3.66748ZM4.5752 6.38225C4.5752 4.11364 6.42525 2.27456 8.70741 2.27456C10.9896 2.27456 12.8396 4.11364 12.8396 6.38225C12.8396 8.65086 10.9896 10.4899 8.70741 10.4899C6.42525 10.4899 4.5752 8.65086 4.5752 6.38225ZM1.29667 13.044C2.1416 11.9988 3.32461 11.3709 4.60031 11.3709H12.3997C13.6754 11.3709 14.8584 11.9988 15.7033 13.044C16.545 14.0853 17 15.4707 17 16.8915V18.5C17 19.3284 16.3284 20 15.5 20H1.5C0.671573 20 0 19.3284 0 18.5V16.8915C0 15.4707 0.454985 14.0853 1.29667 13.044ZM4.60031 12.7638C3.80748 12.7638 3.00668 13.1524 2.38895 13.9166C1.76797 14.6847 1.40124 15.7534 1.40124 16.8915V18.6071H15.5988V16.8915C15.5988 15.7534 15.232 14.6847 14.611 13.9166C13.9933 13.1524 13.1925 12.7638 12.3997 12.7638H4.60031ZM2.73056 5.50093H2.20152C2.14624 5.50093 2.10143 5.54548 2.10143 5.60043V8.30098C2.10143 8.35593 2.14624 8.40047 2.20152 8.40047H2.73056V5.50093ZM15.2135 5.50093H14.6845V8.40047H15.2135C15.2688 8.40047 15.3136 8.35593 15.3136 8.30098V5.60043C15.3136 5.54548 15.2688 5.50093 15.2135 5.50093Z"
            fill={color} />
    </svg>
);

export const LogOut: React.FC<IconProps> = ({ color }) => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.347 17.9994C16.0506 17.9994 16.7254 17.7199 17.2229 17.2224C17.7204 16.7249 17.9998 16.0501 17.9998 15.3466V2.6528C17.9998 1.94924 17.7204 1.27448 17.2229 0.776989C16.7254 0.279493 16.0506 0 15.347 0H11.7202C11.2567 0 10.8808 0.375814 10.8808 0.839405C10.8808 1.303 11.2567 1.67881 11.7202 1.67881H15.347C15.6054 1.67881 15.8531 1.78143 16.0358 1.96408C16.2184 2.14674 16.321 2.39448 16.321 2.6528V15.3466C16.321 15.6049 16.2184 15.8526 16.0358 16.0353C15.8531 16.218 15.6054 16.3206 15.347 16.3206H11.7202C11.2567 16.3206 10.8808 16.6964 10.8808 17.16C10.8808 17.6236 11.2567 17.9994 11.7202 17.9994H15.347Z" fill="#4F5B67" />
        <path d="M7.78026 3.87238C7.45246 3.54457 6.92097 3.54457 6.59317 3.87238C6.26536 4.20019 6.26536 4.73167 6.59317 5.05948L9.69372 8.16003H0.839159C0.375569 8.16003 -0.000244141 8.53584 -0.000244141 8.99943C-0.000244141 9.46302 0.375569 9.83883 0.839159 9.83883H9.6937L6.59317 12.9394C6.26536 13.2672 6.26536 13.7987 6.59317 14.1265C6.92097 14.4543 7.45246 14.4543 7.78026 14.1265L12.3138 9.59297C12.6416 9.26516 12.6416 8.73368 12.3138 8.40587L7.78026 3.87238Z" fill="#4F5B67" />
    </svg>

);

export const Email: React.FC<IconProps> = ({ color }) => (
    <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 1.4C0 1.37584 0.00059025 1.35182 0.00175661 1.32796C0.0379138 0.588239 0.627715 0 1.35 0H16.65C17.3956 0 18 0.626801 18 1.4V12.6C18 13.3732 17.3956 14 16.65 14H1.35C0.604415 14 0 13.3732 0 12.6V1.4ZM1.35 2.41066L1.35 12.6H16.65V2.41077L9.53039 9.53039C9.23749 9.82328 8.76262 9.82328 8.46973 9.53039L1.35 2.41066ZM15.5395 1.4H2.46066L9.00006 7.9394L15.5395 1.4Z"
            fill={color} />
    </svg>
);


export const Notify: React.FC<IconProps> = ({ color }) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.42241 0.112365C8.00265 0.0593855 8.77167 0.0599859 9.53748 0.26975C11.9975 0.94386 13.8051 3.19635 13.8051 5.87083V9.85277C13.8051 9.87787 13.8125 9.90242 13.8264 9.9233L15.379 12.2529C15.5264 12.474 15.5401 12.7583 15.4148 12.9926C15.2894 13.2269 15.0453 13.3732 14.7797 13.3732H10.9361C10.8728 13.3732 10.8192 13.4197 10.8102 13.4823C10.6135 14.8584 9.43012 15.9163 8 15.9163C6.56988 15.9163 5.38655 14.8584 5.18977 13.4823C5.18082 13.4197 5.12719 13.3732 5.06394 13.3732H1.22034C0.954683 13.3732 0.710588 13.2269 0.585236 12.9926C0.459883 12.7583 0.473622 12.474 0.620982 12.2529L2.17357 9.9233C2.18749 9.90242 2.19492 9.87787 2.19492 9.85277V5.87083C2.19492 3.19635 4.00315 0.943687 6.46316 0.269577L6.46607 0.2688L6.47851 0.265563C6.4897 0.262696 6.50661 0.258464 6.52886 0.253181C6.57338 0.242614 6.63923 0.227848 6.72336 0.211387C6.8917 0.178452 7.13284 0.138804 7.42241 0.112365ZM6.80115 13.3732C6.75988 13.3732 6.72118 13.3932 6.69736 13.4269C6.67353 13.4606 6.66754 13.5038 6.68129 13.5427C6.87319 14.0858 7.39097 14.4752 8 14.4752C8.60903 14.4752 9.12681 14.0858 9.31871 13.5427C9.33246 13.5038 9.32647 13.4606 9.30264 13.4269C9.27882 13.3932 9.24012 13.3732 9.19885 13.3732H6.80115ZM2.69806 11.7343C2.67206 11.7734 2.66963 11.8235 2.69175 11.8649C2.71387 11.9062 2.75695 11.932 2.80383 11.932H13.1962C13.2431 11.932 13.2861 11.9062 13.3082 11.8649C13.3304 11.8235 13.3279 11.7734 13.3019 11.7343L12.4854 10.5091C12.4065 10.3908 12.3644 10.2517 12.3644 10.1094V5.87083C12.3644 3.45968 10.4104 1.50506 8 1.50506C5.58961 1.50506 3.63559 3.45968 3.63559 5.87083V10.1094C3.63559 10.2517 3.5935 10.3908 3.51461 10.5091L2.69806 11.7343Z"
            fill={color} />
    </svg>

);

export const Setting: React.FC<IconProps> = ({ color }) => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5579 12.7588C10.0635 12.9606 9.53376 13.0619 8.99973 13.0566C8.19775 13.0564 7.41289 12.8185 6.74606 12.3729C6.07896 11.9272 5.55902 11.2937 5.25199 10.5524C4.94495 9.81117 4.86462 8.99553 5.02114 8.20863C5.17767 7.42173 5.56402 6.69892 6.13134 6.1316C6.69866 5.56428 7.42147 5.17792 8.20837 5.0214C8.99527 4.86488 9.81091 4.94521 10.5522 5.25224C11.2934 5.55927 11.9269 6.07922 12.3727 6.74632C12.8182 7.41314 13.0562 8.198 13.0563 8.99997C13.0616 9.534 12.9604 10.0637 12.7585 10.5582C12.5565 11.0529 12.2579 11.5024 11.88 11.8802C11.5021 12.2581 11.0527 12.5568 10.5579 12.7588ZM9.00327 6.46557H8.99627C8.662 6.45794 8.32965 6.51811 8.01927 6.64246C7.70855 6.76695 7.4263 6.95317 7.18961 7.18986C6.95291 7.42656 6.76669 7.7088 6.6422 8.01953C6.51771 8.33026 6.45755 8.66301 6.46534 8.99765L6.46551 9.00466C6.45803 9.3385 6.51798 9.67045 6.6422 9.98052C6.76669 10.2912 6.95291 10.5735 7.18961 10.8102C7.4263 11.0469 7.70855 11.2331 8.01927 11.3576C8.33 11.4821 8.66275 11.5422 8.99739 11.5345L9.00441 11.5343C9.33825 11.5418 9.6702 11.4818 9.98027 11.3576C10.291 11.2331 10.5732 11.0469 10.8099 10.8102C11.0466 10.5735 11.2329 10.2912 11.3573 9.98052C11.4818 9.6698 11.542 9.33705 11.5342 9.0024L11.534 8.99539C11.5415 8.66155 11.4816 8.3296 11.3573 8.01953C11.2329 7.7088 11.0466 7.42656 10.8099 7.18986C10.5732 6.95317 10.291 6.76695 9.98027 6.64246C9.66989 6.51811 9.33754 6.45794 9.00327 6.46557Z" fill="#667085" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7894 5.75865L17.7904 5.76014C17.9648 6.03641 18.0337 6.36413 17.9845 6.68546C17.9353 7.00736 17.7708 7.30139 17.5209 7.51585L16.2995 8.55634V9.43872L17.5011 10.5096L17.5025 10.5108C17.748 10.721 17.9115 11.008 17.9644 11.3232C18.0174 11.6389 17.9556 11.9632 17.7908 12.2392L16.2982 14.7888C16.1741 14.9978 15.9961 15.1711 15.782 15.2916C15.5681 15.412 15.325 15.4755 15.0783 15.4758C14.9254 15.4769 14.7733 15.4537 14.628 15.4072L14.6264 15.4067L13.0891 14.8995L13.051 14.9233C12.8222 15.0662 12.5858 15.1971 12.3426 15.3154L12.3003 15.336L11.9769 16.892C11.9121 17.2095 11.7347 17.4944 11.4767 17.6966C11.2191 17.8984 10.8974 18.0056 10.5677 17.9998L7.47951 17.9998L7.47785 17.9998C7.14808 18.0056 6.82636 17.8984 6.56881 17.6966C6.31084 17.4944 6.13349 17.2096 6.06863 16.8922L5.74513 15.3358L5.70307 15.3152C5.46194 15.197 5.2275 15.0663 5.00077 14.9235L4.96266 14.8995L3.4171 15.4073C3.27191 15.4538 3.11944 15.4769 2.96671 15.4758C2.71994 15.4755 2.47744 15.412 2.26348 15.2916C2.0496 15.1712 1.87117 14.9973 1.74715 14.7885L0.203233 12.2407C0.0308531 11.9618 -0.0352224 11.6315 0.017903 11.3098C0.0709954 10.9883 0.23909 10.696 0.491674 10.4844L1.69359 9.4442V8.56134L0.491997 7.49044L0.49055 7.48921C0.245082 7.27905 0.0815985 6.99202 0.0287151 6.67681C-0.0242846 6.3609 0.0372337 6.03703 0.202379 5.7608L0.202983 5.75979L1.74759 3.21083C1.87161 3.00198 2.0496 2.82884 2.26348 2.70848C2.47585 2.58895 2.71635 2.52569 2.96123 2.52443L2.96666 2.52409C3.1162 2.51481 3.26634 2.52883 3.41142 2.56563L3.41586 2.56676L4.93124 3.0999L4.97029 3.07551C5.19846 2.93306 5.43427 2.80258 5.6767 2.68462L5.71899 2.66404L6.04242 1.10805C6.10727 0.790609 6.28466 0.505672 6.54262 0.303484C6.80019 0.101608 7.12195 -0.00551148 7.45174 0.000234166L10.5135 0.000248697L10.5152 0.000219642C10.845 -0.005526 11.1668 0.101608 11.4243 0.303484C11.6823 0.505717 11.8597 0.790623 11.9245 1.10808L12.248 2.66422L12.2901 2.68484C12.5312 2.80305 12.7656 2.9338 12.9924 3.07654L13.0305 3.10053L14.576 2.59273C14.7212 2.5463 14.8737 2.52318 15.0265 2.52426C15.2732 2.5246 15.5157 2.58806 15.7296 2.70848C15.9436 2.82886 16.122 3.00277 16.246 3.21165L17.7894 5.75865ZM7.53479 16.5466H10.4581L10.9179 14.2834L10.9724 14.2642C11.6089 14.0398 12.1991 13.7068 12.7155 13.281L12.7588 13.2452L14.9806 13.9768L16.4393 11.5695L14.6794 10.0135L14.6898 9.95682C14.8086 9.30921 14.8086 8.64624 14.6898 7.99863L14.6792 7.94103L16.4387 6.42947L14.9801 4.02246L12.7523 4.72869L12.7096 4.69409C12.191 4.27365 11.6034 3.94096 10.9713 3.70997L10.9178 3.69044L10.4583 1.45348H7.53498L7.07527 3.71664L7.02074 3.73586C6.38423 3.96026 5.794 4.29322 5.27766 4.71904L5.23428 4.75482L3.01255 4.02325L1.5538 6.43053L3.31375 7.98659L3.30336 8.04324C3.18455 8.69085 3.18455 9.35382 3.30336 10.0014L3.31392 10.059L1.55444 11.5706L3.01302 13.9776L5.24087 13.2714L5.28354 13.306C5.80217 13.7264 6.38977 14.0591 7.02184 14.2901L7.07529 14.3096L7.53479 16.5466Z" fill="#667085" />
    </svg>
);


export const DropDown: React.FC<IconProps> = ({ color }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-gray-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
        />
    </svg>
);

export const Plus: React.FC<IconProps> = ({ color }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 3.875C12.6213 3.875 13.125 4.37868 13.125 5V10.875H19C19.6213 10.875 20.125 11.3787 20.125 12C20.125 12.6213 19.6213 13.125 19 13.125H13.125V19C13.125 19.6213 12.6213 20.125 12 20.125C11.3787 20.125 10.875 19.6213 10.875 19V13.125H5C4.37868 13.125 3.875 12.6213 3.875 12C3.875 11.3787 4.37868 10.875 5 10.875H10.875V5C10.875 4.37868 11.3787 3.875 12 3.875Z"
            fill="white" />
    </svg>
);


export const Search: React.FC<IconProps> = ({ color }) => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M16.5 16.5L12.875 12.875M14.8333 8.16667C14.8333 11.8486 11.8486 14.8333 8.16667 14.8333C4.48477 14.8333 1.5 11.8486 1.5 8.16667C1.5 4.48477 4.48477 1.5 8.16667 1.5C11.8486 1.5 14.8333 4.48477 14.8333 8.16667Z" stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

);

export const Filter: React.FC<IconProps> = ({ color }) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.72523 2.87408C1.82987 2.64608 2.05726 2.5 2.30754 2.5H17.6921C17.9424 2.5 18.1698 2.64608 18.2744 2.87408C18.3791 3.10209 18.3418 3.37031 18.1791 3.56097L12.1793 10.5881V16.8571C12.1793 17.0794 12.0649 17.2858 11.8767 17.4032C11.6884 17.5205 11.4532 17.5319 11.2545 17.4335L8.17754 15.9097C7.95881 15.8014 7.82035 15.578 7.82035 15.3333V10.5881L1.82062 3.56097C1.65784 3.37031 1.62059 3.10209 1.72523 2.87408ZM3.70031 3.78571L8.9483 9.93237C9.04775 10.0488 9.1024 10.1971 9.1024 10.3505V14.9338L10.8973 15.8227V10.3505C10.8973 10.1971 10.9519 10.0488 11.0514 9.93237L16.2994 3.78571H3.70031Z"
            fill="#344054" />
    </svg>
);

export const Vertical: React.FC<IconProps> = ({ color }) => (
    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1123 0.666992C10.7591 0.666992 10.4728 0.9502 10.4728 1.29956V8.73436H10.1897V9.99949H10.4728V16.0684H10.1897V17.3336H11.1004C11.1044 17.3336 11.1084 17.3337 11.1123 17.3337H18.5273C18.8805 17.3337 19.1668 17.0505 19.1668 16.7011V1.29956C19.1668 0.9502 18.8805 0.666992 18.5273 0.666992H11.1123ZM11.7519 16.0685V1.93212H17.8878V16.0685H11.7519Z" fill="#344054" />
        <path d="M0.833496 16.701C0.833496 16.8688 0.900876 17.0296 1.02081 17.1483C1.14075 17.2669 1.30342 17.3336 1.47304 17.3336H2.56262V16.0684H2.11257V15.4786H0.833496V16.701Z" fill="#344054" />
        <path d="M2.11257 14.2563L2.11257 11.8116L0.833496 11.8116V14.2563H2.11257Z" fill="#344054" />
        <path d="M2.11257 10.5893V9.99949H2.56262V8.73436H1.47304C1.11983 8.73436 0.833496 9.01757 0.833496 9.36692V10.5893H2.11257Z" fill="#344054" />
        <path d="M5.83138 16.0684H3.65221V17.3336H5.83138V16.0684Z" fill="#344054" />
        <path d="M3.65221 9.99949H5.83138V8.73436H3.65221V9.99949Z" fill="#344054" />
        <path d="M6.92096 9.99949H9.10013V8.73436H6.92096V9.99949Z" fill="#344054" />
        <path d="M9.10013 16.0684H6.92096V17.3336H9.10013V16.0684Z" fill="#344054" />
    </svg>
);

export const Menu: React.FC<IconProps> = ({ color }) => (
    <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.00008 1.08366C4.00008 0.623427 4.37318 0.250331 4.83342 0.250331H13.1667C13.627 0.250331 14.0001 0.623427 14.0001 1.08366C14.0001 1.5439 13.627 1.917 13.1667 1.917H4.83342C4.37318 1.917 4.00008 1.5439 4.00008 1.08366Z"
            fill="#344054" />
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.00016 5.58366C4.00016 5.12342 4.37326 4.75033 4.8335 4.75033H13.1668C13.6271 4.75033 14.0002 5.12342 14.0002 5.58366C14.0002 6.0439 13.6271 6.41699 13.1668 6.41699H4.8335C4.37326 6.41699 4.00016 6.0439 4.00016 5.58366Z"
            fill="#344054" />
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.00008 10.0837C4.00008 9.62342 4.37318 9.25032 4.83342 9.25032H13.1667C13.627 9.25032 14.0001 9.62342 14.0001 10.0837C14.0001 10.5439 13.627 10.917 13.1667 10.917H4.83342C4.37318 10.917 4.00008 10.5439 4.00008 10.0837Z"
            fill="#344054" />
        <path d="M2.16683 1.08366C2.16683 1.58992 1.75642 2.00033 1.25016 2.00033C0.743902 2.00033 0.333496 1.58992 0.333496 1.08366C0.333496 0.577398 0.743902 0.166992 1.25016 0.166992C1.75642 0.166992 2.16683 0.577398 2.16683 1.08366Z"
            fill="#344054" />
        <path d="M2.16683 5.58366C2.16683 6.08992 1.75642 6.50033 1.25016 6.50033C0.743902 6.50033 0.333496 6.08992 0.333496 5.58366C0.333496 5.0774 0.743902 4.66699 1.25016 4.66699C1.75642 4.66699 2.16683 5.0774 2.16683 5.58366Z"
            fill="#344054" />
        <path d="M2.16683 10.0836C2.16683 10.5899 1.75642 11.0003 1.25016 11.0003C0.743902 11.0003 0.333496 10.5899 0.333496 10.0836C0.333496 9.57739 0.743902 9.16698 1.25016 9.16698C1.75642 9.16698 2.16683 9.57739 2.16683 10.0836Z"
            fill="#344054" />
    </svg>
);








