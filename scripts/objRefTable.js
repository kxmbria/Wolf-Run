const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Behaviors.EightDir,
		C3.Plugins.Keyboard,
		C3.Behaviors.solid,
		C3.Behaviors.Bullet,
		C3.Plugins.Text,
		C3.Behaviors.Anchor,
		C3.Behaviors.Sin,
		C3.Plugins.Mouse,
		C3.Behaviors.Pin,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Sprite.Acts.SetFlipped,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Plugins.Keyboard.Cnds.OnAnyKeyReleased,
		C3.Behaviors.Platform.Acts.SetJumpSustain,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Text.Acts.SetVisible,
		C3.Plugins.Text.Acts.MoveToTop,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Sprite.Acts.SetOpacity,
		C3.Behaviors.Platform.Acts.SetMaxSpeed,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Behaviors.Pin.Acts.PinByProperties,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Text.Acts.TypewriterText,
		C3.Plugins.Text.Acts.SetOpacity,
		C3.Plugins.Text.Acts.Destroy,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Plugins.System.Acts.RestartLayout
	];
};
self.C3_JsPropNameTable = [
	{Platform: 0},
	{ScrollTo: 0},
	{"8Direction": 0},
	{wolf: 0},
	{Keyboard: 0},
	{Solid: 0},
	{Grass: 0},
	{BG: 0},
	{rocks: 0},
	{log1: 0},
	{log2: 0},
	{Bullet: 0},
	{fire: 0},
	{rockbox: 0},
	{DOOR: 0},
	{Anchor: 0},
	{wintext: 0},
	{Sine: 0},
	{Moon: 0},
	{RUN: 0},
	{retry: 0},
	{Mouse: 0},
	{cave: 0},
	{Pin: 0},
	{speed: 0},
	{HowTo: 0},
	{SPACE: 0}
];

self.InstanceType = {
	wolf: class extends self.ISpriteInstance {},
	Keyboard: class extends self.IInstance {},
	Grass: class extends self.ISpriteInstance {},
	BG: class extends self.ISpriteInstance {},
	rocks: class extends self.ISpriteInstance {},
	log1: class extends self.ISpriteInstance {},
	log2: class extends self.ISpriteInstance {},
	fire: class extends self.ISpriteInstance {},
	rockbox: class extends self.ISpriteInstance {},
	DOOR: class extends self.ISpriteInstance {},
	wintext: class extends self.ITextInstance {},
	Moon: class extends self.ISpriteInstance {},
	RUN: class extends self.ITextInstance {},
	retry: class extends self.ITextInstance {},
	Mouse: class extends self.IInstance {},
	cave: class extends self.ISpriteInstance {},
	speed: class extends self.ISpriteInstance {},
	HowTo: class extends self.ITextInstance {},
	SPACE: class extends self.ITextInstance {}
}