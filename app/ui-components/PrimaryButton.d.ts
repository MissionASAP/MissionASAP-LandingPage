/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PrimaryButtonOverridesProps = {
    PrimaryButton?: PrimitiveOverrideProps<FlexProps>;
    Placeholder?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type PrimaryButtonProps = React.PropsWithChildren<Partial<FlexProps> & {
    size?: "M" | "S";
    state?: "Active" | "Default" | "Hover";
} & {
    overrides?: PrimaryButtonOverridesProps | undefined | null;
}>;
export default function PrimaryButton(props: PrimaryButtonProps): React.ReactElement;
