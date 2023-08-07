/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { LicardcheckmarkProps } from "./Licardcheckmark";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LicardOverridesProps = {
    Licard?: PrimitiveOverrideProps<FlexProps>;
    "Frame 13"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 16"?: LicardcheckmarkProps;
    "Frame 14"?: PrimitiveOverrideProps<FlexProps>;
    "Low entry prices on DeFi tokens"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type LicardProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: LicardOverridesProps | undefined | null;
}>;
export default function Licard(props: LicardProps): React.ReactElement;
