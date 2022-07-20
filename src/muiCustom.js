import TextField from "@mui/material/TextField";
import {
	styled
} from "@mui/material/styles";

export const CssTextField = styled(TextField)({

	"& .MuiInputBase-input": {
		color: 'var(--main-color)',
		padding: "14px 16px",
		height: "auto",
	},
	'& label': {
		color: 'var(--input-color)',
		fontFamily: "var(--font-family)",
		letterSpacing: 'normal',
		fontSize: 16,
		lineHeight: '22px',
	},
	'& label.Mui-focused': {
		color: 'var(--input-color)',
	},

	'& .MuiInputBase-root': {
		fontFamily: "var(--font-family)",
		fontSize: 16,
		lineHeight: '26px',
		letterSpacing: 'normal',
		'& fieldset': {
			borderColor: 'var(--unchecked)',
		},
		'&:hover fieldset': {
			borderColor: 'var(--unchecked)',
		},
		'&.Mui-focused fieldset': {
			borderColor: 'var(--unchecked)',
			borderWidth: '1px'
		},
	},
	'& .MuiInputBase-root.Mui-error': {
		'& fieldset': {
			borderColor: 'var(--error)',
			borderWidth: '2px'
		},
		'&:hover fieldset': {
			borderColor: 'var(--error)',
			borderWidth: '2px'
		},
		'&.Mui-focused fieldset': {
			borderColor: 'var(--error)',
			borderWidth: '2px'
		},
		'& MuiInputBase-input': {

		}
	},
	'& label.Mui-error': {
		color: 'var(--error)',
	},
	'& label.Mui-focused.Mui-error': {
		color: 'var(--error)',
	},
	'& .MuiFormHelperText-root.Mui-error': {
		fontFamily: "var(--font-family)",
		position: 'absolute',
		left: '16px',
		top: '58px',
		fontSize: '12px',
		lineHeight: '117%',
		color: 'var(--error)',
		letterSpacing: 'normal',
		margin: 0
	}
});