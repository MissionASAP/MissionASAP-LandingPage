/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type COCOLineInstagramOverridesProps = {
    COCOLineInstagram?: PrimitiveOverrideProps<ViewProps>;
    Vector442465?: PrimitiveOverrideProps<IconProps>;
    Vector442466?: PrimitiveOverrideProps<ViewProps>;
    Vector442467?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type COCOLineInstagramProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: COCOLineInstagramOverridesProps | undefined | null;
}>;
export default function COCOLineInstagram(props: COCOLineInstagramProps): React.ReactElement;
