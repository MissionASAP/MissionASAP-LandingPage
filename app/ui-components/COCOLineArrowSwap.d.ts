/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type COCOLineArrowSwapOverridesProps = {
    COCOLineArrowSwap?: PrimitiveOverrideProps<ViewProps>;
    Vector442251?: PrimitiveOverrideProps<ViewProps>;
    Vector442252?: PrimitiveOverrideProps<IconProps>;
    Vector442253?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type COCOLineArrowSwapProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: COCOLineArrowSwapOverridesProps | undefined | null;
}>;
export default function COCOLineArrowSwap(props: COCOLineArrowSwapProps): React.ReactElement;
