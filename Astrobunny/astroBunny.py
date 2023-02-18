""""
RUN INSTRUCTIONS: python3 -m astroBunny
"""

import arcade

# Constants
SCREEN_WIDTH = 1024
SCREEN_HEIGHT = 650
SCREEN_TITLE = "Astrobunny"

CHARACTER_SCALING = 1
TILE_SCALING = 0.5
GRAVITY = 0.25

#Main character sprite source(s)
MAIN_CHAR_LEFT = "images/astrobunnyleft.png"
MAIN_CHAR_RIGHT = "images/astrobunnyright.png"
MAIN_CHAR_SPEED = 5
MAIN_CHAR_JUMP = 10

#Background Sprite Source
GROUND = "images/ground.png"


class MyGame(arcade.Window):
    """
    Main application class.
    """

    def __init__(self):

        # Call the parent class and set up the window
        super().__init__(SCREEN_WIDTH, SCREEN_HEIGHT, SCREEN_TITLE)

        self.wall_list = None
        self.player_list = None

        self.player_sprite = None
        self.physics_engine = None

        self.scene = None

        arcade.set_background_color(arcade.csscolor.CORNFLOWER_BLUE)

    def setup(self):
        """Set up the game here. Call this function to restart the game."""
        self.scene = arcade.Scene()

        self.scene.add_sprite_list("Player")
        self.scene.add_sprite_list("Walls", use_spatial_hash=True)
        self.background = arcade.load_texture("images/surfaceBackground.png")
        
        #creating a player sprite
        self.player_sprite = arcade.Sprite(MAIN_CHAR_RIGHT,0.15)
        self.player_sprite.center_x = 64
        self.player_sprite.center_y = 200
        self.scene.add_sprite("Player",self.player_sprite)

        #Making the ground
        for x in range(0, 1250, 64):
            wall = arcade.Sprite(GROUND, 0.12)
            wall.center_x = x
            wall.center_y = 32
            self.scene.add_sprite("Walls", wall)
        
        #We are just using a simple physics engine
        self.physics_engine = arcade.PhysicsEnginePlatformer(self.player_sprite,gravity_constant=GRAVITY , walls=self.scene["Walls"])

    def on_draw(self):
        """Render the screen."""

        self.clear()
        # Code to draw the screen goes here
        arcade.draw_lrwh_rectangle_textured(0,0,SCREEN_WIDTH,SCREEN_HEIGHT,self.background)
        
        #draw the main character
        self.scene.draw()

    #key press controls for demo and testing before Uno controls are implemented
    def on_key_press(self, key, modifiers):
        if key == arcade.key.UP:
            if self.physics_engine.can_jump():
                self.player_sprite.change_y = MAIN_CHAR_JUMP
        elif key == arcade.key.LEFT:
            self.player_sprite.change_x = -MAIN_CHAR_SPEED
        elif key == arcade.key.RIGHT:
            self.player_sprite.change_x = MAIN_CHAR_SPEED
    
    def on_key_release(self, key, modifiers):
        if key == arcade.key.UP:
            self.player_sprite.change_y = 0
        elif key == arcade.key.LEFT:
            self.player_sprite.change_x = 0
        elif key == arcade.key.RIGHT:
            self.player_sprite.change_x = 0


    def on_update(self, delta_time: float):
        self.physics_engine.update()
        


def main():
    """Main function"""
    window = MyGame()
    window.setup()
    arcade.run()


if __name__ == "__main__":
    main()
