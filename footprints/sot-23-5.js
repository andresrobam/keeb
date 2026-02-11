module.exports = {
	params: {
		designator: 'U',
		L1: { type: 'net', value: 'L1' },
		L2: { type: 'net', value: 'L2' },
		L3: { type: 'net', value: 'L3' },
		L4: { type: 'net', value: 'L4' },
		L5: { type: 'net', value: 'L5' },
		front: true,
		back: false,
	},
	body: p => {

		function footprint(side) {

			function x(x_in) {
				return side === 'B' ? -x_in : x_in
			}

			return `(module SOT-23-5 (layer ${side}.Cu) (tedit 5F6F9B37)
				  ${p.at}
				  (descr "SOT, 5 Pin (https://www.jedec.org/sites/default/files/docs/Mo-178c.PDF variant AA), generated with kicad-footprint-generator ipc_gullwing_generator.py")
				  (tags "SOT TO_SOT_SMD")
				  (attr smd)
				  (fp_line (start 0 1.56) (end ${x(0.8)} 1.56) (layer ${side}.SilkS) (width 0.12))
				  (fp_line (start 0 1.56) (end ${x(-0.8)} 1.56) (layer ${side}.SilkS) (width 0.12))
				  (fp_line (start 0 -1.56) (end ${x(0.8)} -1.56) (layer ${side}.SilkS) (width 0.12))
				  (fp_line (start 0 -1.56) (end ${x(-1.8)} -1.56) (layer ${side}.SilkS) (width 0.12))
				  (fp_line (start ${x(-0.4)} -1.45) (end ${x(0.8)} -1.45) (layer ${side}.Fab) (width 0.1))
				  (fp_line (start ${x(0.8)} -1.45) (end ${x(0.8)} 1.45) (layer ${side}.Fab) (width 0.1))
				  (fp_line (start ${x(0.8)} 1.45) (end ${x(-0.8)} 1.45) (layer ${side}.Fab) (width 0.1))
				  (fp_line (start ${x(-0.8)} 1.45) (end ${x(-0.8)} -1.05) (layer ${side}.Fab) (width 0.1))
				  (fp_line (start ${x(-0.8)} -1.05) (end ${x(-0.4)} -1.45) (layer ${side}.Fab) (width 0.1))
				  (fp_line (start ${x(-2.05)} -1.7) (end ${x(-2.05)} 1.7) (layer ${side}.CrtYd) (width 0.05))
				  (fp_line (start ${x(-2.05)} 1.7) (end ${x(2.05)} 1.7) (layer ${side}.CrtYd) (width 0.05))
				  (fp_line (start ${x(2.05)} 1.7) (end ${x(2.05)} -1.7) (layer ${side}.CrtYd) (width 0.05))
				  (fp_line (start ${x(2.05)} -1.7) (end ${x(-2.05)} -1.7) (layer ${side}.CrtYd) (width 0.05))
				  (pad 1 smd roundrect (at ${x(-1.1375)} -0.95 ${p.rot}) (size 1.325 0.6) (layers ${side}.Cu ${side}.Mask ${side}.Paste) (roundrect_rratio 0.25) ${p.L1.str})
				  (pad 2 smd roundrect (at ${x(-1.1375)} 0 ${p.rot}) (size 1.325 0.6) (layers ${side}.Cu ${side}.Mask ${side}.Paste) (roundrect_rratio 0.25) ${p.L2.str})
				  (pad 3 smd roundrect (at ${x(-1.1375)} 0.95 ${p.rot}) (size 1.325 0.6) (layers ${side}.Cu ${side}.Mask ${side}.Paste) (roundrect_rratio 0.25) ${p.L3.str})
				  (pad 4 smd roundrect (at ${x(1.1375)} 0.95 ${p.rot}) (size 1.325 0.6) (layers ${side}.Cu ${side}.Mask ${side}.Paste) (roundrect_rratio 0.25) ${p.L4.str})
				  (pad 5 smd roundrect (at ${x(1.1375)} -0.95 ${p.rot}) (size 1.325 0.6) (layers ${side}.Cu ${side}.Mask ${side}.Paste) (roundrect_rratio 0.25) ${p.L5.str})
				)`
			}
		

		out = ''

		if (p.front) {
			out += footprint('F')
		}
		if (p.back) {
			out += footprint('B')
		}

		return out
	}
}
