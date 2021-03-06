class User < ApplicationRecord

    has_many :posts, :dependent => :delete_all
    validates :username, :password_digest, :session_token, presence: true
    validates :username, uniqueness: true

    after_initialize :ensure_session_token

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return nil unless user
        user.is_password?(password) ? user : nil
      end
    
      def password=(password)
        @password = password
        if @password != ''
          self.password_digest = BCrypt::Password.create(password)
        end
      end
    
      def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
      end
    
      def reset_session_token!
        generate_unique_session_token
        save!
        self.session_token
      end
    
      private
    
      def ensure_session_token
        generate_unique_session_token unless self.session_token
      end
    
      def new_session_token
        SecureRandom.urlsafe_base64
      end
    
      def generate_unique_session_token
        self.session_token = new_session_token
        while User.find_by(session_token: self.session_token)
          self.session_token = new_session_token
        end
        self.session_token
      end


    
end
