/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type COCOLineNotification2OverridesProps = {
    COCOLineNotification2?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type COCOLineNotification2Props = React.PropsWithChildren<Partial<IconProps> & {
    overrides?: COCOLineNotification2OverridesProps | undefined | null;
}>;
export default function COCOLineNotification2(props: COCOLineNotification2Props): React.ReactElement;
