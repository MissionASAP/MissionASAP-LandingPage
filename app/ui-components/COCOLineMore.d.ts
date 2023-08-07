/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type COCOLineMoreOverridesProps = {
    COCOLineMore?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type COCOLineMoreProps = React.PropsWithChildren<Partial<IconProps> & {
    overrides?: COCOLineMoreOverridesProps | undefined | null;
}>;
export default function COCOLineMore(props: COCOLineMoreProps): React.ReactElement;
