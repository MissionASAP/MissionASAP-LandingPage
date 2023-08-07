/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type COCOLineShieldcheckOverridesProps = {
    COCOLineShieldcheck?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type COCOLineShieldcheckProps = React.PropsWithChildren<Partial<IconProps> & {
    overrides?: COCOLineShieldcheckOverridesProps | undefined | null;
}>;
export default function COCOLineShieldcheck(props: COCOLineShieldcheckProps): React.ReactElement;
