import React, { FC, memo, ReactNode } from 'react';
import MuiMenuItem, { MenuItemProps } from '@material-ui/core/MenuItem';
import { ListItemIcon, ListItemText } from '@material-ui/core';
import useStyles from './styles';

export interface Props extends MenuItemProps {
	show?: boolean;
	description?: string;
	name?: string;
	icon?: ReactNode;
	endIcon?: ReactNode;
}

const MenuItem: FC<Props> = (props) => {
	const classes = useStyles(props);
	const { show = true, endIcon, icon, description, name, id, ...rest } = props;

	if (!show) return null;

	return (
		// @ts-ignore
		<MuiMenuItem key={id} classes={classes} {...rest}>
			{icon && <ListItemIcon>{icon}</ListItemIcon>}
			<ListItemText primary={name} secondary={description} />
			{endIcon && <ListItemIcon>{endIcon}</ListItemIcon>}
		</MuiMenuItem>
	);
};

export default memo(MenuItem);
