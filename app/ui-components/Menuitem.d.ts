/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MenuitemOverridesProps = {
    Menuitem?: PrimitiveOverrideProps<FlexProps>;
    Placeholder?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type MenuitemProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: MenuitemOverridesProps | undefined | null;
}>;
export default function Menuitem(props: MenuitemProps): React.ReactElement;
