/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { LogoProps } from "./Logo";
import { MenuitemProps } from "./Menuitem";
import { FlexProps } from "@aws-amplify/ui-react";
import { PrimaryButtonProps } from "./PrimaryButton";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HeaderOverridesProps = {
    Header?: PrimitiveOverrideProps<FlexProps>;
    container?: PrimitiveOverrideProps<FlexProps>;
    Logo?: LogoProps;
    "col/right"?: PrimitiveOverrideProps<FlexProps>;
    menu?: PrimitiveOverrideProps<FlexProps>;
    menu_item11121?: MenuitemProps;
    menu_item11127?: MenuitemProps;
    "Primary Button"?: PrimaryButtonProps;
} & EscapeHatchProps;
export declare type HeaderProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: HeaderOverridesProps | undefined | null;
}>;
export default function Header(props: HeaderProps): React.ReactElement;
